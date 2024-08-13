import Image from 'next/image'
import { getTranslator } from '@/lib'
import NeonTitle from '@/components/NeonTitle'
import TextBlock from '@/components/TextBlock'
export async function About() {
    const { t } = await getTranslator('Sections')
    return (
        <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row   w-full flex-wrap items-center pointer-events-none ">
            <div className="relative flex  w-full h-screen lg:w-1/2 lg:h-screen flex-1">
                <Image
                    src="/Images/AboutMe.webp"
                    alt="LadyStorm light dress"
                    resposive="true"
                    priority
                    width="960"
                    height="1080"
                    sizes="100vh auto"
                    style={{
                        objectFit: 'contain',

                    }}
                    className='object-center-bottom lg:object-left-bottom'
                />

            </div>
            <div className="relative flex flex-col justify-center items-center lg:h-full w-full w-50% flex-1 pt-20  text-white ">

                <div className="relative flex justify-center items-center">

                    <NeonTitle section="aboutme" color="110, 100%, 42%" colorSpan="300, 100%, 42%" />

                </div>
                <TextBlock section="aboutme" color="text-white" />

            </div>

        </div>
    )
}



//https://github.com/slash9494/react-modern-audio-player?tab=readme-ov-file
