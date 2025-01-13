"use client";
import { useSearchParams } from 'next/navigation'

const SelectedSong = () => {


    const searchParams = useSearchParams();

    const artist = searchParams.get('artist')


    return (
        <div>
            <h1>This is the selected song and lyrics has the artist {artist} </h1>

        </div>
    )
}


export default SelectedSong;
