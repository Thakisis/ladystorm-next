import Image from 'next/image'
import { getTranslator } from '@/lib'
import { NeonClassName } from '@/components/fonts'
import LadyImage from './LadyImage'
import TextBlock from '@/components/TextBlock'
export async function Hero() {
    const { t } = await getTranslator('Sections')
    return (
        <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row   w-full flex-wrap items-center pointer-events-none ">
            <div className="relative flex  w-full h-screen lg:w-1/2 lg:h-screen flex-1">
                <LadyImage />
                <Image
                    src="/Images/LaserBig.webp"
                    alt="Laer image over ladystorm"
                    fill
                    style={{
                        objectFit: "contain",
                        maskImage: "url(/Images/Noise2.webp)",
                        maskMode: "luminance"
                    }}
                    priority
                    className={`absolute object-center-bottom lg:object-left-bottom  animate-laserMove `}
                />
            </div>
            <div className="relative flex flex-col justify-center items-center lg:h-full w-full w-50% flex-1 pt-20  text-white ">
                <Image
                    src="/Images/wall.webp"
                    alt="title background wall of bricks"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'contain',
                        mixBlendMode: "screen",

                    }}

                    className={` object-center-middle  `}
                />
                <div className="relative flex justify-center items-center">
                    <Image
                        className="animate-glow scale-90"
                        src="/Images/TextSpiral.webp"
                        alt="Spiralleft"
                        width={80}
                        height={148}
                        style={{
                            objectFit: 'cover',
                            objectPosition: "left",
                        }}
                    />
                    <h1 className={` text-white text-6xl lg:text-8xl ${NeonClassName} neon`} style={{ "--neon-color": "#f822ff" }}>Lady<span className='animate-Blink'>Storm</span></h1>
                    <Image
                        className=" animate-glow"

                        src="/Images/TextSpiral.webp"
                        alt="Spiralright"
                        width={80}
                        height={148}
                        style={{
                            objectFit: 'cover',
                            objectPosition: "left",
                            rotate: "180deg"
                        }}
                    />
                </div>

                <TextBlock section="hero" color="text-white" />
            </div>
            <div className="absolute top-0 w-full h-screen flex  justify-end items-end text-xl">
                <div className=" mr-12 mb-20 flex justify-center gap-4">


                </div>
            </div>
        </div>
    )
}



//https://github.com/slash9494/react-modern-audio-player?tab=readme-ov-file
