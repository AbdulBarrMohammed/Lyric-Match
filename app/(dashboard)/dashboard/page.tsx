import Link from "next/link"
const Songs = () => {
    return (

        <div>
            <h1>Displayed songs</h1>

            <ul>
                <li><Link href="/dashboard/songs/1">Song one</Link></li>
                <li><Link href="/dashboard/songs/2"> Song two</Link></li>
                <li><Link href="/dashboard/songs/3">Song three</Link></li>


            </ul>

        </div>
    )
}

export default Songs;
