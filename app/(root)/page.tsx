"use client";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import Link from "next/link";


export default function Home() {


  interface Album {
    id: string;
    images: Image[]

  }

  interface Image {
    id: string
    url: string
  }




  const [listAlbums, setListAlbums] = useState<Album[]>([]);
  const [lyricSearch, setLyricSearch] = useState("");


    useEffect(() => {

      /**
       * Fetches data from api
       * @param none
       * @return none
       */
      const fetchData = async () => {

        const url = 'https://spotify23.p.rapidapi.com/albums/?ids=2ANVost0y2y52ema1E9xAZ%2C7dK54iZuOxXFarGhXwEXfF%2C4xwx0x7k6c5VuThz5qVqmV%2C0ETFjACtuP2ADo6LFhL6HN%2C2HTbQ0RHwukKVXAlTmCZP2%2C6QaVfG1pHYl1z15ZxkvVDW%2C7ycBtnsMtyVbbwTfJwRjSP%2C5uYDAwW0SZgcfOFkxrST64%2C3HZKOk1knxrUU3y5ZIOdbz%2C20r762YmB5HeofjMCiPMLv%2C5XpEKORZ4y6OrCZSKsi46A%2C1uD1kdwTWH1DZQZqGKz6rY%2C2tm3Ht61kqqRZtIYsBjxEj%2C3tx8gQqWbGwqIGZHqDNrGe%2C3mH6qwIy9crq0I9YQbOuDf%2C0bUTHlWbkSQysoM3VsWldT';
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '6fcd2a3ab1mshfb67ad05e307206p1ddbf9jsnbada5cabdb8b',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
          }
        };


        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();

          //Set albums in a array
          setListAlbums(result.albums)

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

  return (
    <div className="flex flex-col items-center h-screen">

      <div className="flex flex-col items-center text-center mt-24 gap-10 px-10">

        <h1 className="text-7xl font-bold">Uncover the song behind the words, just enter the lyrics</h1>
        <div className="flex gap-1 text-3xl">
          <p className="font-bold">Enter lyrics: </p>
          <Typewriter
            options={{
              strings: [
                "All you need is love, love. Love is all you need",
                "Every new beginning comes from some other beginning's end",
                "Even the genius asks questions"
              ],
              autoStart: true,
              loop: true,

            }}
          />
        </div>


        <div className="flex flex-wrap gap-3">

          <form className="flex gap-3">

            <input type="text" id="lyric" name="lyric" maxLength={50} minLength={2} className="px-4 bg-[#1F1F1F] border border-white rounded-md text-lg w-80"
             placeholder="Enter lyrics"
             onChange={(e) => setLyricSearch(e.target.value)}
            />
            <Link className="bg-white rounded-md font-bold text-[#1F1F1F]  px-5 py-3 text-2xl hover:opacity-80 transition-all duration-300 ease-in-out"

            href={{
              pathname: '/dashboard',
              query: {
                search : lyricSearch
              }
            }}>Search song </Link>

          </form>


        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center px-20">
            {listAlbums.map(alb =>
                <div key={alb.id}>
                  <img className='h-24' src={alb.images[0].url}/>
                </div>

            )}

        </div>


        <footer className="mt-20 mb-10">

          <p>
          © 2025 Abdul-Barr Mohammed. All rights reserved.
          </p>
        </footer>



      </div>






    </div>
  );
}
