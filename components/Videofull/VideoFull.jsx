

const VideoFull = ({ setVideo, videoFile = "underwater", style }) => {
    /*
        const videoRef=useRef(null)
        useEffect(()=>{
            if(setVideo)
            {
                setVideo(videoRef)
            }
        },[videoRef,setVideo])
    */

    return (

        <video className=" top-0 w-full h-screen z-0 absolute object-cover" autoPlay playsInline loop muted width="1920px" height="1080px"  >
            <source src={`/videos/${videoFile}.avif`} type="video/avif" />
            <source src={`/videos/${videoFile}.m4v`} type="video/mp4" />
        </video>

    )
}

export default VideoFull;

