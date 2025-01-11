'use client';
import Link from "next/link"
import { useSearchParams } from 'next/navigation'
const Songs = () => {

    const searchParams = useSearchParams();
    const currentLyric = searchParams.get('search')

    return (

        <div>
            <h1>Displayed songs</h1>
            <h1>The current search query is : {currentLyric}</h1>

            <ul>
                <li><Link href="/dashboard/songs/1">Song one</Link></li>
                <li><Link href="/dashboard/songs/2"> Song two</Link></li>
                <li><Link href="/dashboard/songs/3">Song three</Link></li>


            </ul>

        </div>
    )
}

export default Songs;
