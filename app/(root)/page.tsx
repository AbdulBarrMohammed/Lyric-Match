'use client'
import { useEffect, useState } from "react";

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
  const [lists, setLists] = useState([]);

    useEffect(() => {
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
          for (let i = 0; i < result.albums.length; i++) {
            console.log(result.albums[i])
            setListAlbums(result.albums)

          }

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);


  return (
    <div className="flex flex-col items-center h-screen">

      <main className="flex flex-col items-center text-center mt-36 gap-10 px-10">

        <h1 className="text-7xl font-bold">Uncover the song behind the words, just enter the <span className="text-sky-500">lyrics</span></h1>
        <div>
          <p>Enter lyrics: no one no one</p>
        </div>


        <div className="flex gap-3">

            <input/>
            <button>Search song</button>

        </div>

        <div className="flex flex-wrap gap-5 items-center justify-center px-20">
            {listAlbums.map(alb =>
                <div key={alb.id}>
                  <img className='h-28' src={alb.images[0].url}/>
                </div>

            )}

        </div>

      </main>




    </div>
  );
}
