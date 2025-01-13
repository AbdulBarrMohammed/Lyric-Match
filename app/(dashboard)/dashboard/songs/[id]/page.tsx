"use client";
import { useSearchParams } from 'next/navigation'

const SelectedSong = () => {


    const searchParams = useSearchParams();

    const artist = searchParams.get('artist')
    const image = searchParams.get('image')
    const name = searchParams.get('name')


    return (
        <div>
            {/* <h1>This is the selected song and lyrics has the artist {artist} </h1> */}

            <div className='flex items-center'>
                {image &&
                    <img src={image} />
                }
                <div className='flex flex-col'>
                    <h1>{name}</h1>
                    <p>{artist}</p>

                </div>


            </div>

        </div>
    )
}


export default SelectedSong;
