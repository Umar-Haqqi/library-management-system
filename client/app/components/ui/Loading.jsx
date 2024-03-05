export default function Loading({ config: { visiblity, solid } }) {
    return (
        <div className={`${visiblity ? 'flex' : 'hidden'} ${solid ? 'bg-opacity-100 bg-white' : 'bg-opacity-50 bg-slate-950 text-white'} fixed top-0 bottom-o left-0 right-0 z-50 select-none h-full items-center justify-center font-bold text-lg sm:text-3xl md:text-3xl text-sky-900`}>
            Loading...
        </div>
    );
};