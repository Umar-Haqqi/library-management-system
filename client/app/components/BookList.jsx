"use client"

import { useEffect, useState } from 'react';
import Button from './ui/Button';
import { useRouter } from "next/navigation";
import Modal from './ui/Modal';
import Loading from './ui/Loading';

const BookList = () => {
    const router = useRouter();

    const tableheads = ['Books', 'Action'];
    const [loader, setLoader] = useState({ visiblity: true, solid: true });
    const [modalVisiblity, setModalVisiblity] = useState(false);
    const [fetchBooks, setFetchBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.API}/books`,);
                const data = await response.json();
                setFetchBooks(data);
                setLoader({ visiblity: false, solid: false });
            } catch (error) {
                console.error('Error fetching books:', error);
                setLoader({ visiblity: false, solid: false });
            }
        };
        fetchData();
    }, []);

    function viewBookDetails(book) {
        setSelectedBook(book);
        setModalVisiblity(true);
    }

    return (
        <>
            <div className='w-2/3 py-10 m-auto' >
                <table className='w-full'>
                    <thead>
                        <tr className='bg-slate-200'>
                            {tableheads.map((item, index) => <th key={index} className='text-center font-semibold text-xs md:text-sm py-1 px-2 sm:py-[6px] sm:px-3 md:py-2 md:px-4 border border-slate-300 min-w-10'>
                                {item}
                            </th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {fetchBooks.map((item, index) => (
                            <tr key={index}>
                                <td className='text-center font-semibold text-xs md:text-sm py-1 px-2 sm:py-[6px] sm:px-3 md:py-2 md:px-4 border border-slate-300 min-w-10'>
                                    {item.title}
                                </td>
                                <td className='text-center flex justify-center items-center gap-2 font-semibold text-xs md:text-sm py-1 px-2 sm:py-[6px] sm:px-3 md:py-2 md:px-4 border border-slate-300 min-w-10'>
                                    <Button
                                        text='View Details'
                                        onClick={() => viewBookDetails(item)}

                                    />
                                    <Button
                                        text='Check-in'
                                        onClick={() => router.push('/checkin?id=' + item._id)}
                                        disabled={!item || (item.available === true)}
                                    />
                                    <Button
                                        text='Check-Out'
                                        onClick={() => router.push('/checkout?id=' + item._id)}
                                        disabled={!item || (item.available === false)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal title="Book Details" modalVisiblity={modalVisiblity} setModalVisiblity={setModalVisiblity}>
                {selectedBook && (
                    <ul className='mt-4 mb-2'>
                        <li className='text-gray-800 mb-2'><span className='font-semibold text-gray-600'>Title: </span>{selectedBook.title}</li>
                        <li className='text-gray-800 mb-2'><span className='font-semibold text-gray-600'>ISBN: </span>{selectedBook.ISBN}</li>
                        <li className='text-gray-800 mb-2'><span className='font-semibold text-gray-600'>Publish year: </span>{selectedBook.publishYear}</li>
                        <li className='text-gray-800 mb-2'><span className='font-semibold text-gray-600'>Cover price: </span>${selectedBook.coverPrice}</li>
                        <li className='text-gray-800 mb-2'><span className='font-semibold text-gray-600'>Status: </span>{selectedBook.available ? <span className="text-green-600">Available</span> : <span className="text-red-600">Not Available</span>}</li>
                    </ul>
                )}
            </Modal>

            <Loading config={loader} />
        </>

    )
}

export default BookList
