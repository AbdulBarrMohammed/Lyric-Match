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
    const explicit = searchParams.get('explicit')

    //let playAudio = songUrl ? new Audio(songUrl) : new Audio();

    const audioRef = useRef<HTMLAudioElement>(null);




    function playSong() {

        if (audioRef.current) {
            audioRef.current.play()
        }

        setIsPlaying(true)


    }

    function pauseSong() {
        if (audioRef.current) {
            audioRef.current.pause()
        }

        setIsPlaying(false);
    }

    function playPause() {
        if (isPlaying) {
            pauseSong()
        }
        else {
            playSong()
        }
    }


    return (
        <div className='h-screen flex items-start px-10 py-10'>
            {/* <h1>This is the selected song and lyrics has the artist {artist} </h1> */}

            <div className='flex gap-5'>
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
