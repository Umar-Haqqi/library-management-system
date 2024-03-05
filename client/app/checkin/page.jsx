"use client"

import InputField from '../components/ui/InputField'
import Button from '../components/ui/Button'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const page = () => {
    const [book, setBook] = useState({});

    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.API}/books/${searchParams.get("id")}`,);
                const data = await response.json();
                setBook(data);
                console.log(data, "herrrrr");
            } catch (error) { console.error('Error fetching books:', error) }
        };
        fetchData();
    }, []);

    const checkinFunc = async () => {
        try {
            const response = await fetch(`${process.env.API}/books/checkin/${searchParams.get('id')}`, {
                method: 'POST',
                body: JSON.stringify({}),
                headers: { "Content-Type": "application/json" },
            });
            if (response.status === 200) window.location.href = "/";
        } catch (error) {
            console.error('Error during checkout process:', error);
        }
    };

    return (
        <div className='w-full bg-slate-100 m-auto px-20 py-10 box-border flex justify-center'>
            <div className='w-1/2 bg-slate-100 border border-solid border-slate-300 rounded-md flex flex-col items-center pb-4'>
                <h2 className='text-3xl text-center font-semibold my-4'>Check-In</h2>
                <InputField
                    label={"Borrower's Name"}
                    inputType={"text"}
                    onchange={() => { }}
                    value={book.checkoutBy ? book.checkoutBy.name : ''}
                    readOnly={true}
                />
                <InputField
                    label={"Borrower's Phone No."}
                    inputType={"number"}
                    onchange={() => { }}
                    value={book.checkoutBy ? book.checkoutBy.phoneNumber : ''}
                    readOnly={true}
                />
                <InputField
                    label={"Borrower's Phone No."}
                    inputType={"number"}
                    onchange={() => { }}
                    value={book.checkoutBy ? book.checkoutBy.nationalId : ''}
                    readOnly={true}
                />
                <InputField
                    label={"Due Date"}
                    inputType={"date"}
                    onchange={() => { }}
                    value={book.checkoutBy ? book.checkoutBy.returnDate : ''}
                    readOnly={true}
                />
                <InputField
                    label={"Return Date"}
                    inputType={"date"}
                    onchange={() => { }}
                    value={book.checkoutBy ? book.checkoutBy.checkOutDate : ''}
                    readOnly={true}
                />
                <div className='w-[400px] border-dotted bg-sky-950 border-2 border-slate-100 py-10 my-5'>
                    <p className='text-center font-semibold text-white'>{`Bill to pay: ${book.coverPrice}$`}</p>
                </div>
                <div className='mt-2 mb-2 flex justify-between'>
                    <Button
                        text={"Check-In"}
                        onClick={checkinFunc}
                    />
                </div>
            </div>

        </div>
    )
}

export default page
