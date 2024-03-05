import InputField from '../components/ui/InputField'
import Button from '../components/ui/Button'

const page = () => {
    return (
        <div className='w-full bg-white m-auto px-20 py-5 box-border flex justify-center'>
            <div className='w-1/2 bg-slate-100 border border-solid border-slate-300 rounded-md flex flex-col items-center pb-4'>
                <h2 className='text-3xl text-center font-semibold my-4'>Register</h2>
                <InputField
                    label={"Please Enter your Username"}
                    inputType={"text"}
                />
                <InputField
                    label={"Please Enter your Email"}
                    inputType={"email"}
                />
                <InputField
                    label={"Please Enter your Password"}
                    inputType={"password"}
                />
                <div className='my-2 flex justify-between'>
                    <Button
                        text={"Register"}
                    />
                </div>
            </div>

        </div>
    )
}

export default page
