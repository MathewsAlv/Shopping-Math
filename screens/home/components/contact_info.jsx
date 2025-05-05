

export default function ContactInfo() {
    return (
        <div className="h-130 flex p-15 bg-[#412E6A]">
            <div className="h-full w-full flex flex-col justify-center font-sans text-shadow-lg/20">
                <div>
                    <h1 className="text-3xl font-mono font-bold">Contactanos!</h1>
                </div>
                <div className="text-sm mt-5">
                    <div>
                        <p>742 Evergreen Terrace</p>
                    </div>
                    <div className="mt-2">
                        <a href="tel:1-929-556-2746">1-929-556-2746</a>
                    </div>
                    <div className="mt-2">
                        <a href="">tecnostore@gmail.com</a>
                    </div>
                </div>
                <div className=" mt-10">
                    <h2 className="text-2xl font-mono">Siguenos!</h2>
                </div>
                <div className="flex">
                    <a href="https://www.facebook.com/cocoloser"><img className="h-10" src="https://img.icons8.com/?size=100&id=435&format=png&color=000000" alt="facebook" /></a>
                    <a href="https://x.com/coco_loser_"><img className="h-10" src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=000000" alt="X" /></a>
                    <a href="https://cl.linkedin.com/"><img className="h-10" src="https://img.icons8.com/?size=100&id=447&format=png&color=000000" alt="linkedIn" /></a>

                </div>
            </div>
            <div className="h-full w-200">
                <div className="flex relative">
                    <form className="absolute right-0 p-6 space-y-3 w-100 ">
                        <div>
                            <input
                                id="name"
                                type="text"
                                placeholder="Tu nombre"
                                className="mt-1 w-full border rounded-md p-2"
                            />
                        </div>
                        <div>
                            <input
                                id="email"
                                type="email"
                                placeholder="tucorreo@ejemplo.com"
                                className="mt-1 w-full border rounded-md p-2"
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Escribe tu mensaje..."
                                className="mt-1 w-full border rounded-md p-2 h-40 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="block ml-auto w-30 bg-[#EF474A] border-1 text-white p-2 rounded-md hover:bg-pink-600 transition-colors"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}