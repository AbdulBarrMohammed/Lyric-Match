"use client";
import { useSearchParams } from 'next/navigation'
import { useState } from "react";


const SelectedSong = () => {


    const searchParams = useSearchParams();
    const [playBtn, setPlayBtn] = useState(false);

    const artist = searchParams.get('artist')
    const image = searchParams.get('image')
    const name = searchParams.get('name')
    const songUrl = searchParams.get('songUrl')
    const explicit = searchParams.get('explicit')

    let playAudio = songUrl ? new Audio(songUrl) : new Audio();



    function playSong() {

        if (!playBtn) {
            playAudio.play()
        }
        else {
            playAudio.pause()
        }
        setPlayBtn(!playBtn)

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
                        <p>{songUrl}</p>
                    </div>

                    <div className='flex justify-start'>
                        {!playBtn
                            && <img className="h-20" src="/play-circle.svg" onClick={playSong}/>
                        }
                        {
                            playBtn && <img className="h-20" src="/pause-circle.svg" onClick={playSong}/>
                        }

                    </div>



                </div>


            </div>

        </div>
    )
}


export default SelectedSong;
