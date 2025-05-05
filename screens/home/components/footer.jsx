

export default function Footer() {
    return (
        <div className="h-30 w-full bg-[#312D29] flex flex-col justify-center items-center p-23 font-sans ">
            <div className="flex justify-around items-center w-90 font-bold">
                <div>
                    <a href="">El equipo</a>
                </div>
                <div>
                    <a href="">Articulos</a>
                </div>
                <div>
                    <a href="">Testimonios</a>
                </div>
                <div>
                    <a href="">Contactos</a>
                </div>
            </div>
            <div className="mt-10 text-sm w-full flex justify-center">
                <h3>©Mathews Alvear</h3>
            </div>
        </div>
    )
}