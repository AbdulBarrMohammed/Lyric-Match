'use client';
import Link from "next/link";
import { useState } from "react";

const Layout = ({ children } : {children: React.ReactNode }) => {

    const [lyricSearch, setLyricSearch] = useState("");

    return (

        <div>
            <div className="flex">


                <div>

                    <input type="text" id="lyric" name="lyric" className="pl-4 bg-[#201919] border border-white rounded-md text-lg pr-20"
                    placeholder="Enter lyrics"
                    onChange={(e) => setLyricSearch(e.target.value)}
                    />
                    <Link className="bg-sky-500 rounded-md font-bold text-white px-5 py-3 text-2xl"

                        href={{
                        pathname: '/dashboard',
                        query: {
                            search : lyricSearch
                        }
                    }}>Search song </Link>
                </div>

                <div>Navr bar dashboard</div>



            </div>
            {children}
        </div>

    )

}

export default Layout
