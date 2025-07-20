import { useState } from "react";
import CreateSongInput from "../components/createSongInput";

function Home() {
  const [title, setTitle] = useState("");
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);

  function handleCreate() {
    if (title.trim() !== "") {
      setSongs([...songs, title]);
      setTitle("");
      if (currentSongIndex === -1) {
        setCurrentSongIndex(0); 
      }
    }
  }

  function handleNext() {
    if (songs.length > 0) {
      setCurrentSongIndex((prevIndex) =>
        prevIndex < songs.length - 1 ? prevIndex + 1 : 0
      );
    }
  }

  function handlePrevious() {
    if (songs.length > 0) {
      setCurrentSongIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : songs.length - 1
      );
    }
  }

  function handleJump(index) {
    setCurrentSongIndex(index);
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
        {songs.map((song, index) => (
          <li
            key={index}
            onClick={() => handleJump(index)}
            style={{
              cursor: "pointer",
              fontWeight: index === currentSongIndex ? "bold" : "normal",
              color: index === currentSongIndex ? "green" : "black",
            }}
          >
            {song}
          </li>
        ))}
      </ol>

      <h3>Current song:</h3>
      <p>
        {songs.length > 0 && currentSongIndex >= 0
          ? songs[currentSongIndex]
          : "No songs in playlist"}
      </p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePrevious} disabled={songs.length === 0}>
          ◀ Previous
        </button>
        <button onClick={handleNext} disabled={songs.length === 0}>
          Next ▶
        </button>
      </div>
    </div>
  );
}

export default Home;
