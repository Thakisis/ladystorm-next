import Image from 'next/image'
import { getTranslator } from '@/lib'
import NeonTitle from '@/components/NeonTitle'
import TextBlock from '@/components/TextBlock'

export async function Sing() {
    const { t } = await getTranslator('Sections')
    return (
        <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row   w-full flex-wrap items-center pointer-events-none bg-white ">
            <div className="relative flex  w-full h-screen lg:w-1/2 lg:h-screen flex-1 justify-start">

                <Image
                    src="/Images/Sing.webp"
                    alt="Ladystorm Dance"
                    resposive="true"
                    priority
                    width="930"
                    height="1080"
                    sizes="100vh"
                    style={{

                        right: 0,
                        objectFit: 'contain',
                        objectPosition: "bottom left",
                    }}

                />
            </div>
            <div className="relative flex flex-col justify-center items-center lg:h-full w-full w-50% flex-1 pt-20   ">

                <div className="relative flex justify-center items-center">

                    <NeonTitle section="sing" textDark={true} color="36, 100%, 30%" />

                </div>

                <TextBlock section="sing" textDark={true} />
            </div>




        </div>
    )
}



//https://github.com/slash9494/react-modern-audio-player?tab=readme-ov-file
