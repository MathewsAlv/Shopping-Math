

export default function Services() {
    return (
        <div className="h-160 flex flex-col justify-center content-center align-center pd-20 bg-[#412E6A]">
            <div className="text-center h-30 mx-20 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-mono font-bold"> Productos y servicios </h1>
                <p className="mt-3 font-sans"> No solo venta de productos, tambien ofrecemos servicio tecnico! </p>
            </div>
            <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
                <div className="border-1 border-white h-85 w-80 pt-12 pb-20 pl-6 pr-10 relative">
                    <div className="border-1 border-white bg-gray-500 h-13 w-13 box-border absolute -top-6 left-6">
                        <img src="/images/box_icon.svg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-xl mt-2 mb-2 font-mono">Productos</h2>
                        <p className="text-sm mt-2 mb-10 leading-6 h-35 font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus illum, perspiciatis deleniti labore voluptates numquam neque,
                            debitis corporis magnam minima quis placeat, illo officia ut quae
                            dolorum suscipit expedita eos?
                        </p>
                        <a href="">Contacto {">"} </a>
                    </div>
                </div>
                <div className="border-1 border-white h-85 w-80 pt-12 pb-20 pl-10 pr-10 relative">
                    <div className="border-1 border-white bg-gray-500 h-13 w-13 box-border absolute -top-6 left-6">
                        <img src="/images/box_icon.svg" alt="" />
                    </div>
                    <div className="flex flex-col ">
                        <h2 className="text-xl mt-2 mb-2 font-mono">Ofertas</h2>
                        <p className="text-sm mt-2 mb-10 leading-6 h-35 font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus illum, perspiciatis deleniti labore voluptates numquam neque,
                            debitis corporis magnam minima quis placeat, illo officia ut quae
                            dolorum suscipit expedita eos?
                        </p>
                        <a href="">Contacto {">"}</a>
                    </div>
                </div>
                <div className="border-1 border-white h-85 w-80 pt-12 pb-20 pl-10 pr-10 relative">
                    <div className="border-1 border-white bg-gray-500 h-13 w-13 box-border absolute -top-6 left-6">
                        <img src="/images/box_icon.svg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-xl mt-2 mb-2 font-mono">Servicio Tecnico</h2>
                        <p className="text-sm mt-2 mb-10 leading-6 h-35 font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus illum, perspiciatis deleniti labore voluptates numquam neque,
                            debitis corporis magnam minima quis placeat, illo officia ut quae
                            dolorum suscipit expedita eos?
                        </p>
                        <a href="">Contacto {">"}</a>
                    </div>
                </div>
            </div>



        </div >

    );
}