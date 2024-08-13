import Image from 'next/image'
import { getTranslator } from '@/lib'
import NeonTitle from '@/components/NeonTitle'
import VideoFull from '@/components/Videofull'
import Textblock from '@/components/TextBlock'
export async function Swimsuite() {
    const { t } = await getTranslator('Sections')
    return (

        <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row   w-full flex-wrap items-center pointer-events-none bg-black">
            <VideoFull videoFile='Underwater' />
            <div className="relative flex  w-full h-screen lg:w-1/2 lg:h-screen flex-1 justify-start  ">


                <Image

                    src="/Images/Swim.webp"
                    alt="Picture of the author"
                    priority
                    responsive="true"
                    width="1185"
                    height="933"
                    sizes="auto 100vw"
                    style={{
                        opacity: 0.,
                        objectFit: "contain",
                        mixBlendMode: "overlay",
                        objectPosition: "left bottom",
                        mixBlendMode: "overlay",
                    }}
                />
                <Image

                    src="/Images/Swim.webp"
                    alt="Picture of the author"
                    priority
                    responsive="true"
                    width="1185"
                    height="933"
                    sizes="auto 100vw"
                    style={{
                        objectFit: "contain",
                        mixBlendMode: "overlay",
                        objectPosition: "left bottom",
                        transform: "translateX(-100%)",
                        mixBlendMode: "overlay"
                    }}


                />
                <Image

                    src="/Images/Swim.webp"
                    alt="Picture of the author"
                    priority
                    responsive="true"
                    width="1185"
                    height="933"
                    sizes="auto 100vw"
                    style={{
                        objectFit: "contain",
                        opacity: 0.4,
                        objectPosition: "left bottom",
                        transform: "translateX(-200%)",

                    }}


                />



            </div>
            <div className="relative flex flex-col justify-center items-center lg:h-full w-full w-50% flex-1 pt-20  text-white ">

                <div className="relative flex justify-center items-center">

                    <NeonTitle section="swim" color="254, 100%, 52%" />

                </div>
                <Textblock section="swim" color="text-white" />
            </div>




        </div>
    )
}



//https://github.com/slash9494/react-modern-audio-player?tab=readme-ov-file
