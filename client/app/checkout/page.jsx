"use client"

import InputField from '../components/ui/InputField'
import Button from '../components/ui/Button'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'


const page = () => {
    const checkOutDate = new Date().toISOString().slice(0, 10);
    const returnDate = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

    const searchParams = useSearchParams()

    const [borrowerName, setBorrowerName] = useState(''),
        [borrowerNumber, setBrorowerNumber] = useState(0),
        [borrowerNiD, setBorrowerNid] = useState(0),
        [checkoutDate, setCheckoutDate] = useState(checkOutDate),
        [returnDueDate, setReturnDueDate] = useState(returnDate)

    const checkoutFunc = async () => {
        try {
            if (borrowerName === '' || borrowerNumber === 0 || borrowerNiD === 0) alert('Please fill in all fields');

            const response = await fetch(`${process.env.API}/books/checkout/${searchParams.get('id')}`, {
                method: 'POST',
                body: JSON.stringify({ name: borrowerName, phoneNumber: +borrowerNumber || 0, nationalId: +borrowerNiD || 0, checkOutDate: checkoutDate, returnDate: returnDueDate }),
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
                <h2 className='text-3xl text-center font-semibold my-4'>Checkout</h2>
                <InputField
                    label={"Borrower's Name"}
                    inputType={"text"}
                    onchange={(e) => setBorrowerName(e.target.value)}
                />
                <InputField
                    label={"Borrower's Phone No."}
                    inputType={"number"}
                    onchange={(e) => setBrorowerNumber(e.target.value)}
                />
                <InputField
                    label={"Borrower's National ID No."}
                    inputType={"number"}
                    onchange={(e) => setBorrowerNid(e.target.value)}
                />
                <InputField
                    label={"Checkout Date"}
                    inputType={"date"}
                    value={checkOutDate}
                    onchange={(e) => setCheckoutDate(e.target.value)}
                />
                <InputField
                    label={"Return Date"}
                    inputType={"date"}
                    value={returnDate}
                    onchange={(e) => setReturnDueDate(e.target.value)}
                />
                <div className='mt-2 mb-2 flex justify-between'>
                    <Button
                        onClick={checkoutFunc}
                        text={"Checkout"}
                    />
                </div>
            </div>

        </div>
    )
}

export default page
