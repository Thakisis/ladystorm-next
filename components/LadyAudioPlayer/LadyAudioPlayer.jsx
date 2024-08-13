"use client"
import { useEffect, useState } from 'react'
import AudioPlayer from 'react-modern-audio-player'
import { playList } from './playlist'
import { AudioLinesIcon, SquareX } from 'lucide-react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
/** you can get audioPlayerState by props */
const CustomComponent = ({
    audioPlayerState, setIsOpen
}) => {

    const close = () => {
        setIsOpen(false)
    }
    return (
        <div className='flex w-[25px] aspect-square cursor-pointer'>

            <SquareX onClick={close} />

        </div>
    )
}
const CustomComponent2 = ({
    audioPlayerState, setIsOpen
}) => {

    const close = () => {
        setIsOpen(false)
    }
    return (
        <div className='flex w-[25px] aspect-square cursor-pointer'>
            <SquareX onClick={close} />
        </div>
    )
}

const TimerComponent = ({
    audioPlayerState, setIsOpen
}) => {
    const [time, setTime] = useState({ elapsed: 0, duration: 0 })
    useEffect(() => {

        audioPlayerState.elementRefs?.audioEl?.addEventListener("timeupdate", (e) => setTime({ elapsed: e.target.currentTime, duration: e.target.duration || 0 }))
    }, [audioPlayerState])

    return (
        <div className='flex w-[25px] aspect-square cursor-pointer' style={{ fontFamily: "monospace" }}>
            <Timer time={time.elapsed} className={"text-[#0072f5] font-semibold"} />
            <span className='mx-1'>/</span>
            <Timer time={time.duration} className={"text-white/40    "} />
        </div>
    )
}
function Timer({ time = 0, className }) {
    const Minutes = Math.floor(time / 60)
    const Seconds = Math.floor(time % 60)
    return (
        <div className='flex w-40 m-1 align-middle '>
            <span className={className}>{`${Minutes <= 9 ? "0" : ""}${Minutes}`}:{`${Seconds <= 9 ? "0" : ""}${Seconds}`}</span>
        </div>
    )
}


function LadyAudioPlayer(props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={`fixed bottom-[16px] left-[10px] z-[100] bg-black p-1 rounded-full border-1 border-white/20 backdrop-blur-sm ${isOpen ? "opacity-0 pointer-events-none" : "opacity-1 pointer-events-auto"} transition-all `}>
                <HoverBorderGradient>

                    <AudioLinesIcon size={25} onClick={() => setIsOpen(!isOpen)} className='cursor-pointer text-white/80 hover:text-white/100 ' />
                </HoverBorderGradient>
            </div>
            <div className='flex fixed z-[99] bottom-0 left-0 w-full  '>

                <div className={`${isOpen ? "flex" : "hidden"} `}>
                    <AudioPlayer
                        width="0"

                        className="z-50 ml-4 h-9  opacity-0 "
                        style={{ backgroundColor: "white" }}
                        playList={playList}
                        audioInitialState={{
                            muted: false,
                            volume: 0.2,
                            curPlayId: 1,
                        }}
                        placement={{
                            interface: {

                                customComponentsArea: {
                                    closeComponent: "row1-1",
                                    //timerComponent: "row1-8",

                                },
                                templateArea: {
                                    artwork: "row1-7",
                                    trackInfo: "row1-2",
                                    playButton: "row1-3",
                                    repeatType: "row1-4",
                                    volume: "row1-5",
                                    playList: "row1-6",
                                    trackTimeDuration: "row1-10",
                                    progress: "row1-9",
                                    trackTimeCurrent: "row1-8",

                                },



                            },
                            player: "bottom",
                            volumeSlider: 'top',
                        }
                        }



                        PlayListPlacement="top"
                        activeUI={{
                            artwork: true,
                            trackInfo: true,
                            playButton: true,
                            prevNnext: true,
                            volume: true,
                            volumeSlider: true,
                            playList: true,
                            progress: "bar",
                            trackTime: true,


                        }}>

                        <AudioPlayer.CustomComponent placement="row1-1" id="closeComponent">
                            <CustomComponent setIsOpen={setIsOpen} />
                        </AudioPlayer.CustomComponent>
                    </AudioPlayer>
                </div >
            </div>
        </>
    )
}


export default LadyAudioPlayer
