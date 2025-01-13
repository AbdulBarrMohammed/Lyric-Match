'use client';
import Link from "next/link"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

const Songs = () => {

    // API Object interfaces
    interface Song {
        key: string
        url: string
        heading: Heading
        images: Image
        stores : Stores

    }

    interface Heading {
        title: string
        subtitle: string

    }

    interface Image {
        default: string
    }

    interface Stores {
        apple: Apple
    }

    interface Apple {
        trackid?: string
        previewurl?: string
        explicit?: boolean
    }


    const [songs, setSongs] = useState<Song[]>([]);
    const [lyric, setLyric] = useState("");
    const famousLyrics = [
        "Let it be, let it be",
        "We will, we will rock you",
        "I want to hold your hand",
        "You can't always get what",
        "All you need is love",
        "Hit me baby one more",
        "I can't get no satisfaction",
        "Every little thing she does",
        "Don't stop believing, hold on",
        "Cause I’m happy, clap along",
        "Like a rolling stone, how",
        "Is this the real life?",
        "I want it that way",
    ];

    const searchParams = useSearchParams();
    const currentLyric = searchParams.get('search') || '';

    useEffect(() => {

         //Get random lyric
        const randInt = Math.floor(Math.random() * (famousLyrics.length - 0 + 1) + 0);

        //Set current lyric if search query is not empty else choose random lyric
        const currentLyric = searchParams.get('search') || famousLyrics[randInt];
        setLyric(currentLyric)

        //Replace all space instances with %20
        const searchQuery = currentLyric ? currentLyric.replaceAll(" ", '%20') : 'it is empty';

        /**
         * Fetch api data
         * @param none
         * @return none
         */
        const fetchData = async () => {

            const url = `https://shazam-api6.p.rapidapi.com/shazam/search_track/?query=${searchQuery}&limit=10`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '81e42ad7ffmsh3015e1e91e965c4p11f062jsnfb6f5accadc3',
                    'x-rapidapi-host': 'shazam-api6.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                if (result.result.tracks) {
                    setSongs(result.result.tracks.hits)
                }
                else {
                    alert("Cannot find song with lyrics")
                }


            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

          fetchData();
        }, [currentLyric]);



    return (

        <div className="py-10 flex flex-col h-screen px-3">

            <h1 className="flex flex-start px-5 text-3xl font-bold items-center">Songs with lyrics: <span className="font-normal ml-2 text-2xl"> "{lyric}"</span></h1>


            <div className="flex flex-wrap gap-1">
                {songs.map((song, index) =>
                    <div  className="flex flex-col" key={song.key}>

                        <Link

                        href={{
                            pathname: `/dashboard/songs/${index}`,
                            query: {

                              image : song.images.default,
                              artist : song.heading.subtitle,
                              name: song.heading.title,
                              songUrl: song.stores.apple.previewurl,
                              explicit: song.stores.apple.explicit

                            }
                          }}
                        className="flex flex-col items-center gap-1 hover:bg-[#626262] p-5 rounded-md opacity-80 transition-all duration-300 ease-in-out cursor-pointer">
                            <img className="w-60 object-fill rounded-md" src={song.images.default} />
                            <div className="w-60 text-start">
                                <p>{song.heading.title}</p>
                                <p className="text-[#A5A5A5]">{song.heading.subtitle}</p>

                            </div>

                        </Link>


                    </div>
                )}
            </div>

        </div>
    )
}

export default Songs;
