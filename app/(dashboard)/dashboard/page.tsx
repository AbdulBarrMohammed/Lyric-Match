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
        images: Image

        //images: []

    }

    interface Heading {
        title: string
        subtitle: string

    }

    interface Image {
        default: string
    }

    const [songs, setSongs] = useState<Song[]>([]);
    const searchParams = useSearchParams();
        const currentLyric = searchParams.get('search') || '';




    useEffect(() => {



        //const search = "and I've got this friend you see";


        const searchQuery = currentLyric ? currentLyric.replaceAll(" ", '%20') : 'it is empty';

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
        }, [currentLyric]);



    return (

        <div>
            <h1>Displayed songs</h1>

            {/*

            <ul>
                <li><Link href="/dashboard/songs/1">Song one</Link></li>
                <li><Link href="/dashboard/songs/2"> Song two</Link></li>
                <li><Link href="/dashboard/songs/3">Song three</Link></li>


            </ul>
            */}



            <div className="flex flex-wrap gap-10 px-10">
                {songs.map(song =>
                    <div  className="flex flex-col" key={song.key}>

                        <div className="flex flex-col items-center gap-2">
                            <img className="w-60 object-fill" src={song.images.default} />
                            <div className="w-60 text-start">
                                <p>{song.heading.title}</p>
                                <p className="text-[#A5A5A5]">{song.heading.subtitle}</p>

                            </div>

                        </div>


                    </div>
                )}
            </div>

        </div>
    )
}

export default Songs;
