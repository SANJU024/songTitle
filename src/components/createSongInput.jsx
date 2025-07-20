function CreateSongInput({title, setTitle,handleCreate}){
    return (
        <div>
            <input type="text"
                placeholder="Enter the song title: " 
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                className="bg-slate-400 placeholder-white text-md px-3 rounded-tl-md rounded-bl-md py-1"
            />
            <button className="bg-blue-500 rounded-tr-md rounded-br-md text-md px-3 py-1" onClick={handleCreate}>ADD</button>
        </div>
    )
}

export default CreateSongInput;