"use client";
import { useSearchParams } from 'next/navigation'
import { useRef, useState } from "react";


const SelectedSong = () => {


    const searchParams = useSearchParams();
    const [isPlaying, setIsPlaying] = useState(false);

    const artist = searchParams.get('artist')
    const image = searchParams.get('image')
    const name = searchParams.get('name')
    const songUrl = searchParams.get('songUrl')

    const audioRef = useRef<HTMLAudioElement>(null);


    /**
     * Plays current song audio
     * @param none
     * @return none
     */
    function playSong() {

        if (audioRef.current) {
            audioRef.current.play()
        }

        setIsPlaying(true)


    }

    /**
     * Pauses current song audio
     * @param none
     * @return none
     */
    function pauseSong() {
        if (audioRef.current) {
            audioRef.current.pause()
        }

        setIsPlaying(false);
    }

    /**
     * Plays and pauses current song audio
     * @param none
     * @return none
     */
    function playPause() {
        if (isPlaying) {
            pauseSong()
        }
        else {
            playSong()
        }
    }


    return (
        <div className='h-screen flex items-start px-10 py-16'>

            <div className='flex gap-10'>
                {image &&
                    <img className="h-80" src={image} />
                }
                <div className='flex flex-col gap-14'>
                    <div>
                        <h1 className='text-7xl'>{name}</h1>
                        <p className='text-3xl'>{artist}</p>
                    </div>

                    <div className='flex justify-start'>

                        <div onClick={playPause}>
                            {isPlaying ? <img className="h-20" src="/pause-circle.svg"/> : <img className="h-20" src="/play-circle.svg"/>}
                        </div>


                        {songUrl &&
                            <audio ref={audioRef} src={songUrl} />
                        }



                    </div>


                </div>

            </div>

        </div>
    )
}


export default SelectedSong;
