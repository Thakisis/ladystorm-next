import Image from 'next/image'
import { getTranslator } from '@/lib'
import NeonTitle from '@/components/NeonTitle'
import TexTblock from '@/components/TextBlock'

export async function Burleska() {
    const { t } = await getTranslator('Sections')
    return (
        <div className="relative flex flex-col  min-h-screen lg:flex-row   w-full flex-wrap items-center pointer-events-none ">
            <div className="relative flex flex-col justify-center items-center lg:h-full w-full w-50% flex-1 pt-20  text-white ">

                <div className="relative flex justify-center items-center">

                    <NeonTitle section="burleska" color="47, 100%, 42%" />

                </div>
                <TexTblock section="burleska" color="text-white" />
            </div>


            <div className="relative flex  w-full h-screen lg:w-1/2 lg:h-screen flex-1 justify-end">

                <Image
                    src="/Images/Burleska.webp"
                    alt="Ladystorm Burleska"
                    resposive="true"
                    priority
                    width="1156"
                    height="1080"
                    sizes="100vh auto"
                    style={{
                        objectFit: 'contain',
                        objectPosition: "right bottom",
                    }}

                />            </div>

        </div>
    )
}



//https://github.com/slash9494/react-modern-audio-player?tab=readme-ov-file
