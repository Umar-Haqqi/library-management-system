"use client"

import InputField from '../components/ui/InputField'
import Button from '../components/ui/Button'
import { useState } from 'react';

const page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => { };

    return (
        <div className='w-full bg-white m-auto px-20 py-12 box-border flex justify-center'>
            <div className='w-1/2 bg-slate-100 border border-solid border-slate-300 rounded-md flex flex-col items-center pb-4'>
                <h2 className='text-3xl text-center font-semibold my-4'>Login</h2>
                <InputField
                    label={"Please Enter your Username"}
                    inputType={"text"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                    label={"Please Enter your Password"}
                    inputType={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='my-2 flex justify-between'>
                    <Button
                        onClick={handleLogin}
                        text={"Login"}
                    />
                </div>
            </div>
        </div>
    )
}

export default page
