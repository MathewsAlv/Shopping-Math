"use client";

import { useRef, useState } from "react";

export default function SlideRev() {
    const sliderRef = useRef(null);
    const [startX, setStartX] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 3;

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
        sliderRef.current.style.cursor = "grabbing";
    }

    const handleMouseUp = (e) => {
        const endX = e.clientX;
        const deltaX = endX - startX;

        if (deltaX < -50) {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        } else if (deltaX > 50) {
            setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        }

        sliderRef.current.style.cursor = "grab";
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };


    return (
        <div className="w-full h-96 relative flex justify-center bg-contain bg-center bg-[url(/images/banner_rev.jpg)] bg-cover">
            <div
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className="overflow-hidden w-280 h-full cursor-grab text-black select-none"
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full text-[#9DBACD] text-shadow-lg/30"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    <div className="w-full flex-shrink-0 flex justify-center items-center text-3xl bg-black/30">
                        <div className="w-8xl p-15">
                            <div className="flex flex-col justify-center items-center">
                                <div className="mb-30 text-base font-mono font-bold">
                                    <h6>Pablo Rodriguez</h6>
                                </div>
                                <div className="text-center font-sans font-bold">
                                    <p className="line-clamp-3 text-ellipsis text-xl">
                                        Las mejores cafeteras, sin ningun inconveniente y perfecto estado.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-shrink-0 flex justify-center items-center text-3xl bg-black/30">
                        <div className="w-8xl p-15">
                            <div className="flex flex-col justify-center items-center">
                                <div className="mb-30 text-base font-mono font-bold ">
                                    <h6>Mauricio Urrutia</h6>
                                </div>
                                <div className="text-center font-sans font-bold">
                                    <p className="line-clamp-3 text-ellipsis text-xl">
                                        Calidad increible en todos los productos, el mejor lugar para equipar tu cocina!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-shrink-0 flex justify-center items-center text-3xl bg-black/30">
                        <div className="w-8xl p-15">
                            <div className="flex flex-col justify-center items-center">
                                <div className="mb-30 text-base font-mono font-bold">
                                    <h6>Daniela Acosta</h6>
                                </div>
                                <div className="text-center font-sans font-bold">
                                    <p className="line-clamp-3 text-ellipsis text-xl">
                                        Siempre puedo confiar en la calidad de los productos de esta tienda, nunca fallan!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            {/* Flechas */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
                className="absolute top-1/2 left-39 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
            >
                ←
            </button>
            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
                className="absolute top-1/2 right-39 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
            >
                →
            </button>

            {/* Paginación */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                {[...Array(totalSlides)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-purple-500" : "bg-gray-400"}`}
                    />
                ))}
            </div>
        </div>
    );
}