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
            <div className={`fixed bottom-[0px] left-[5px] z-[100] bg-black p-1 rounded-full border-1 border-white/20 backdrop-blur-sm ${isOpen ? "opacity-0 pointer-events-none" : "opacity-1 pointer-events-auto"} transition-all `}>
                <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        <AudioLinesIcon size={20} onClick={() => setIsOpen(!isOpen)} className='cursor-pointer text-white/80 hover:text-white/100 ' />
                    </span>
                </div>



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

