import Image from 'next/image'
import { getTranslator } from '@/lib'
import NeonTitle from '@/components/NeonTitle'
import Textblock from '@/components/TextBlock'


export async function Sunshine() {

    const style3d = {
        display: 'block',
        width: "752px",
        height: "752px",
        position: "absolute",
        top: 0,
        right: 0,



    }
    const styletransfomr = {



    }

    const { t } = await getTranslator('Sections')

    return (
        <div className="relative flex flex-col-reverse  min-h-screen lg:flex-row-reverse  w-full flex-wrap items-center overflow-hidden bg-black">
            <div className="relative flex  w-full h-screen lg:w-1/2 lg:h-screen flex-1 ">
                <div className=" absolute w-full h-full flex">
                    <Image
                        src="/Images/TurnTableSunshine.webp"
                        alt="Turn table Sunshine Band"

                        priority
                        width="960"
                        height="1080"
                        sizes="20vh auto"
                        style={{
                            objectFit: "contain",
                            opacity: 1,
                            zIndex: 10,
                            mixBlendMode: "lighten"
                        }}
                        className='object-contain object-right-bottom'
                    />
                </div>
                <div style={{ ...style3d }}>
                    <Image
                        src="/Images/disc1.webp"
                        alt="Turn table Sunshine Band overlay"

                        priority
                        width="752"
                        height="752"
                        sizes="auto auto"
                        className={`object-contain object-center-middle discImage`}
                    />
                </div>
                <Image
                    src="/Images/TurnTableSunshine.webp"
                    alt="Sunshine vinyl"
                    priority
                    width="960"
                    height="1080"
                    sizes="20vh auto"
                    style={{

                    }}
                    className=' object-contain object-right-bottom'
                />



            </div>
            <div className="relative flex flex-col justify-center items-center lg:h-full w-full w-50% flex-1 pt-20  text-white ">

                <div className="relative flex justify-center items-center">

                    <NeonTitle section="sunshine" color="0, 100%, 52%" colorSpan="41, 100%, 57%" />

                </div>
                <Textblock section="sunshine" />
            </div>
        </div>
    )
}


