'use client';
import Link from "next/link";
import { useState } from "react";

const Layout = ({ children } : {children: React.ReactNode }) => {

    const [lyricSearch, setLyricSearch] = useState("");

    return (

        <div>
            <div className="flex items-center justify-between px-5 py-5">

                <div className="flex gap-10 items-center">
                    <Link href="/" className='flex gap-2 items-center'>
                        <img src={'/music-circle.svg'} className='h-12' />
                        <h1 className='text-3xl font-semibold'>LyricMatch</h1>
                    </Link>

                    <ul className="flex gap-5 text-lg">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/dashboard">Discover</Link></li>
                    </ul>


                </div>




                <div className="flex gap-3">

                    <input type="text" id="lyric" name="lyric" maxLength={50} className="px-4 bg-[#1F1F1F] border border-white rounded-md text-lg  w-80"
                    placeholder="Enter lyrics"
                    onChange={(e) => setLyricSearch(e.target.value)}
                    />
                    <Link className="bg-white rounded-md font-bold text-[#1F1F1F] px-5 py-2 text-xl"

                        href={{
                        pathname: '/dashboard',
                        query: {
                            search : lyricSearch
                        }
                    }}>Search song </Link>
                </div>



            </div>
            {children}
        </div>

    )

}

export default Layout
