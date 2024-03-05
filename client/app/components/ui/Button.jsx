function Button({ text, icon, onClick, className, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center px-4 py-1.5 border border-transparent text-sm font-medium rounded-sm text-dark ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-sky-900 hover:bg-sky-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'} ${className}`}
        >
            {icon && <span className="mr-1 text-dark"><i className='text-dark font-bold'>{icon}</i></span>}
            {text}
        </button>
    )
}

export default Button
