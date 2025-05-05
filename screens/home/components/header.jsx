

export default function Module() {
    return (
        <div className={`flex flex-col justify-center items-center h-118 bg-[url(/images/banner_shop3.png)] bg-contain bg-[#412E6A] `}>
            <div className="flex flex-col align-center justify-center text-center h-42 pt-10">
                <h1 className=" text-6xl h-94 pb-15 text-[#8400ff] font-mono font-bold text-shadow-lg">ElectroStore</h1>
                <p className=" text-5xl h-74  text-[#aacf54] font-sans font-bold text-shadow-lg underline">Electrodomesticos de todo tipo, en un solo lugar.</p>
            </div>
            <div className="flex justify-between w-72 m-5 pt-8 font-mono">
                <button className="bg-[#EF474A] h-13 w-32 hover:bg-pink-800 cursor-pointer">El equipo</button>
                <button className="bg-[#EF474A] h-13 w-32 hover:bg-pink-800 cursor-pointer">Articulos</button>
            </div>
        </div>

    );
}



