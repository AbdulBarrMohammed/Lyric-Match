'use client';
import Link from "next/link"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

const Songs = () => {

    //DASHBOARD

    interface Song {
        key: string
        url: string
        heading: Heading

        //images: []

    }

    interface Heading {
        title: string
        subtitle: string

    }

    const [songs, setSongs] = useState<Song[]>([]);


    const searchParams = useSearchParams();
    const currentLyric = searchParams.get('search')

    const search = "and I've got this friend you see";

    const searchQuery = search.replaceAll(" ", '%20');
    useEffect(() => {
          const fetchData = async () => {


            const url = `https://shazam-api6.p.rapidapi.com/shazam/search_track/?query=${searchQuery}&limit=10`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '6fcd2a3ab1mshfb67ad05e307206p1ddbf9jsnbada5cabdb8b',
                    'x-rapidapi-host': 'shazam-api6.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result.result.tracks.hits);
                setSongs(result.result.tracks.hits)



            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

          fetchData();
        }, []);



    return (

        <div>
            <h1>Displayed songs</h1>
            <h1>The current search query is : {currentLyric}</h1>

            <ul>
                <li><Link href="/dashboard/songs/1">Song one</Link></li>
                <li><Link href="/dashboard/songs/2"> Song two</Link></li>
                <li><Link href="/dashboard/songs/3">Song three</Link></li>


            </ul>

            <ul>
                {songs.map(song =>
                    <div key={song.key}>
                        {song.heading.title} -
                        {song.heading.subtitle}
                    </div>
                )}
            </ul>

        </div>
    )
}

export default Songs;
