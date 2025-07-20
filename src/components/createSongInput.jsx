function CreateSongInput({title, setTitle,handleCreate}){
    return (
        <div>
            <input type="text"
                placeholder="Enter the song title: " 
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
            />
            <button onClick={handleCreate}>ADD</button>
        </div>
    )
}

export default CreateSongInput;