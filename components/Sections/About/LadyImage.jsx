import Image from 'next/image'

function LadyImage(props) {
    return (
        <>
            <Image
                src="/Images/LadyStorm.webp"
                alt="Ladystorm in laser dress"
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
            <Image
                src="/Images/LadyStormGoggles.webp"
                alt="Image for change goggles colors"
                resposive="true"
                priority
                width="960"
                height="1080"
                sizes="100vh auto"
                style={{
                    objectFit: 'contain',

                }}
                className={` mix-blend-screen absolute  w-full h-full left-200% object-center-bottom lg:object-left-bottom animate-hueRotation animate-duration-[5s] `}
            />
            <Image
                src="/Images/LadyStormwhip.webp"
                alt="Image for whip change color"
                resposive="true"
                priority
                width="960"
                height="1080"
                sizes="100vh auto"
                style={{
                    objectFit: 'contain',

                }}
                className={`mix-blend-screen absolute  w-full h-full left-300% object-center-bottom lg:object-left-bottom animate-hueRotation  animate-duration-[7s] `}
            />
        </>
    )
}

export default LadyImage
