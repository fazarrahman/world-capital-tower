import Carousel from "./ui/carousel";

const Hero = () => {


    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <Carousel />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-center text-white"><span className="text-orange-500">World</span> Capital Tower</h1>
                <h2 className="mt-4 text-1xl md:text-2xl lg:text-4xl font-extrabold text-center text-white">The New Highlights in the city</h2>
            </div>
        </div>
    );
};

export default Hero;
