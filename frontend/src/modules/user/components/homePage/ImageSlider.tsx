import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
    // Use state to track the current active index
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Define an array of image URLs
    const images: string[] = [
        "https://i.imgur.com/8cGUp8Q.jpeg",
        "https://i.imgur.com/5cDDPA1.jpeg"
    ];

    // Effect to handle auto-slide functionality
    useEffect(() => {
        // Set an interval to automatically change slides
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Slide changes every 3 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
         <div className='bg-color2 sliderOuter p-28 h-[730] w-full'>
            <div id="carouselExampleSlidesOnly" className="relative" data-twe-carousel-init data-twe-ride="carousel">
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    {images.map((image: string, index: number) => (
                        <div
                            key={index}
                            className={`relative float-left w-full transition-transform duration-[600ms] ease-in-out ${index === activeIndex ? "block" : "hidden"
                                }`}
                        >
                            <img src={image} className="block w-full rounded-3xl" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        </>

    );
};

export default Carousel;
