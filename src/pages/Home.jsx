import { useState } from "react";
import CreateSongInput from "../components/createSongInput";

function Home() {
    const [title, setTitle] = useState("");
    const [song, setSongs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleCreate() {
        if (title.trim()) {
            setSongs([...song, title]);
            setTitle("");
        }
    }

    function handleNext() {
        if (song.length > 0) {
            setCurrentIndex((prev) => (prev + 1) % song.length);
        }
    }

    function handlePrevious() {
        if (song.length > 0) {
            setCurrentIndex((prev) => (prev - 1 + song.length) % song.length);
        }
    }

    function handleDelete(indexToDelete) {
        const updatedSongs = song.filter((_, index) => index !== indexToDelete);
        setSongs(updatedSongs);

        if (updatedSongs.length === 0) {
            setCurrentIndex(0);
        } else if (indexToDelete === currentIndex) {
            setCurrentIndex(0);
        } else if (indexToDelete < currentIndex) {
            setCurrentIndex((prev) => prev - 1);
        }
    }

    return (
        <div>
            <CreateSongInput 
                title={title}
                setTitle={setTitle}
                handleCreate={handleCreate}
            />

            <h3>Playlist:</h3>
            <ol>
                {song.map((songTitle, index) => (
                    <li 
                        key={index} 
                        onClick={() => setCurrentIndex(index)} 
                        style={{
                            cursor: "pointer",
                            fontWeight: currentIndex === index ? "bold" : "normal"
                        }}
                    >
                        {songTitle}
                        <button onClick={(e) => { e.stopPropagation(); handleDelete(index); }}>Delete</button>
                    </li>
                ))}
            </ol>

            <h3>Current Song:</h3>
            <p>{song.length > 0 ? song[currentIndex] : "No songs in playlist"}</p>

            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Home;
