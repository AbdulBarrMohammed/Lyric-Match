"use client";
import { useSearchParams } from 'next/navigation'

const SelectedSong = () => {


    const searchParams = useSearchParams();

    const artist = searchParams.get('artist')
    const image = searchParams.get('image')
    const name = searchParams.get('name')


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
                        <img className="h-20" src="/play-circle.svg" />
                        <img className="h-20" src="/pause-circle.svg" />
                    </div>



                </div>


            </div>

        </div>
    )
}


export default SelectedSong;
