

export default function Description() {
    return (
        <div className="flex flex-col items-center m-5 h-164 bg-[#212b93]">
            <div>
                <h2 className="text-5xl m-3 font-mono font-bold">Sobre el equipo</h2>
            </div>
            <div>

            </div>
            <div className="flex justify-center items-center mt-15">
                <div className="relative ">
                    <img className="h-100 w-120 mr-50 rounded-xl" src="/images/Domestics.jpg" alt="" />
                    <div className=" box-border absolute w-45 h-40 p-5 bg-[#312D29] top-50 -left-24 flex flex-wrap justify-center items-center text-center rounded-xl">
                        <p className="text-base font-mono font-bold text-shadow-lg/30">Maestros en calidad y tecnologia.</p>
                        <p className="text-sm font-sans text-shadow-lg">Desde 1980</p>
                    </div>
                </div>
                <div className="w-120 h-84 text-lg text-justify text-wrap flex flex-wrap items-center text-base/7 text-clip font-sans shadow-2xl rounded-xl p-5">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Cupiditate rerum natus est omnis aliquid provident voluptatum
                            dolor dolore quos veniam earum nostrum reiciendis, quia unde corrupti
                            ipsam aspernatur id? Voluptatibus.
                        </p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Cupiditate rerum natus est omnis aliquid provident voluptatum
                            dolor dolore quos veniam earum nostrum reiciendis, quia unde corrupti
                            ipsam aspernatur id? Voluptatibus.
                        </p>
                    </div>
                </div>


            </div>

        </div>
    );
}