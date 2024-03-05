import { X } from "lucide-react";

export default function Modal({ title, children, modalVisiblity, setModalVisiblity }) {
    return (
        <div className={`${modalVisiblity ? 'flex' : 'hidden'} fixed top-0 bottom-o left-0 right-0 z-40 bg-opacity-70 bg-slate-800 select-none h-full items-center justify-center px-4`}>
            <div className="container mx-auto xl:max-w-3xl bg-white mt-4 p-3 pt-2 sm:p-4 sm:pt-3 md:p-5 md:pt-3 lg:p-6 lg:pt-4 rounded shadow max-w-xl">
                <div className="flex justify-between items-center pageHeading">
                    <h1 className="text-base sm:text-xl font-semibold text-slate-900">{title}</h1>
                    <X className="hover:text-red-600 cursor-pointer" onClick={() => setModalVisiblity(false)} />
                </div>
                <div className="w-full">{children}</div>
            </div>
        </div>
    );
};