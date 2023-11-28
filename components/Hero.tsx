'use client'
import Image from "next/image"
import { CustomButton } from "."

const Hero = () => {
    const handleScrollClick = () => {

    }
    return (
        <div className="flex flex-col md:flex-row space-y-10 items-center px-10 md:px-20 pt-20 overflow-hidden">
            <div className="md:w-1/2 md:mr-5 space-y-4">
                <h1 className="text-4xl font-bold">Find, book, or rent a car - quickly and easily!</h1>
                <p className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi rem veniam maiores sapiente .</p>
                <CustomButton
                    title='Explore Cars'
                    containerStyles="bg-blue-500 text-white rounded-full px-4 py-1 border-[1px] hover:border-blue-500 hover:text-blue-500 hover:bg-white font-medium"
                    handleClick={handleScrollClick}
                />
            </div>
            <div className="relative flex-1">
                <Image src={'/hero.png'} alt="hero" width={600} height={500} />
                <div className="absolute top-[-20px] right-[-150px] z-[-1]">
                    <Image src={'/hero-bg.png'} alt="hero-bg" width={600} height={800}/>
                </div>
            </div>
        </div>
    )
}

export default Hero
