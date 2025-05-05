"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="h-20 w-full fixed z-1">
            <nav
                className={`flex justify-between items-center transition-colors duration-500 ${scrolled ? "bg-[#312D29] shadow-md" : "bg-tansparent"
                    }`}
            >
                <div className="w-30 h-18 ml-10">
                    <img src="" alt="" />
                </div>
                <div className="w-110 h-15 flex justify-around items-center font-sans font-bold text-shadow-lg/90">
                    <div>
                        <a href="">El equipo</a>
                    </div>
                    <div>
                        <a href="">Servicios</a>
                    </div>
                    <div>
                        <a href="">Testimonios</a>
                    </div>
                    <div>
                        <a href="">Contactos</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
