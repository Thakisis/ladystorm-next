"use client"
import dynamic from "next/dynamic"
const AudioPlayer = dynamic(() => import("./LadyAudioPlayer"), { ssr: false })

function DinamicAudio(props) {
    return <AudioPlayer />
}

export default DinamicAudio
