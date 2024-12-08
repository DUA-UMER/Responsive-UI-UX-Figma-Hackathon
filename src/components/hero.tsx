export default function Hero() {
    return (
        <div className="hero">
            {/* First Section: Image and Title */}
            <div className="flex justify-center items-center">
                <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] ml-10 mr-10">
                    <img className="w-full h-auto" src="hero1.png" alt="hero" />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] ml-10 mr-10">
                    <img className="w-full h-auto" src="hero2.png" alt="hero" />
                </div>
            </div>

            <div className="flex justify-center items-center mt-4">
                <div className="w-full -mx-70"> {/* Increased negative margin for both sides */}
                    <img
                        className="w-full md:w-[1260px] lg:w-[1470px] xl:w-[1680px] h-auto"
                        src="hero3.png"
                        alt="hero"
                    />
                </div>
            </div>

            <div className="flex justify-center items-center mt-16">
                <div className="w-full -mx-70"> {/* Increased negative margin for both sides */}
                    <img
                        className="w-full md:w-[1260px] lg:w-[1470px] xl:w-[1680px] h-auto"
                        src="hero4.png"
                        alt="hero"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center mt-28">
                <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] ml-10 mr-10">
                    <img className="w-full h-auto" src="hero5.png" alt="hero" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-28 mb-6">
                <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] ml-10 mr-10">
                    <img className="w-full h-auto" src="hero6.png" alt="hero" />
                </div>
            </div>
        </div>
    )
}