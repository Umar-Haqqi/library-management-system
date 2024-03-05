function InputField({ label, inputType, inputPlaceholder, className, id, value, onchange, readOnly }) {
    return (
        <div
            className={` px-2 py-1.5 text-sm font-medium`}
        >
            <div className='mb-1'>
                <label className='text-sm font-normal '>{label}</label>
            </div>
            <div>
                <input
                    // defaultValue={defaultValue}
                    onChange={onchange}
                    value={value}
                    id={id}
                    type={inputType}
                    placeholder={inputPlaceholder}
                    className={`w-[400px] py-2.5 px-3 bg-slate-200 border border-solid border-slate-300 rounded-md ${className}`}
                    disabled={readOnly}
                />
            </div>
        </div>
    )
}

export default InputField
