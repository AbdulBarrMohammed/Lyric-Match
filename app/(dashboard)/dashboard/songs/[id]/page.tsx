

const SelectedSong = ({ params } : {params : { id: string }}) => {

    const { id } = params;

    return (
        <div>
            <h1>This is the selected song and lyrics id {id} </h1>
        </div>
    )
}


export default SelectedSong
