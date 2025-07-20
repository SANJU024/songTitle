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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">🎵 My Playlist </h1>
        <div className="flex  flex-between justify-between ">
            <div >
                <div>
                    <CreateSongInput
                        title={title}
                        setTitle={setTitle}
                        handleCreate={handleCreate}
                    />
                </div>
                <div>
                    <h3 className="text-xl font-semibold mt-6 text-center">Current song:</h3>
                    <p className="text-lg text-green-700 mb-4 text-center">
                        {songs.length > 0 && currentSongIndex >= 0
                        ? songs[currentSongIndex]
                        : "No songs in playlist"}
                    </p>

                    <div className="flex justify-between">
                        <button
                        onClick={handlePrevious}
                        disabled={songs.length === 0}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                        >
                        ◀ Previous
                        </button>
                        <button
                        onClick={handleNext}
                        disabled={songs.length === 0}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                        >
                        Next ▶
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3 className="text-xl font-semibold mt-6 mb-2">Playlist:</h3>
                    <ol className="list-decimal pl-5 space-y-1">
                        {songs.map((song, index) => (
                            <li
                            key={index}
                            onClick={() => handleJump(index)}
                            className={`cursor-pointer transition-colors duration-150 p-1 rounded-md ${
                            index === currentSongIndex
                                ? "bg-blue-100 text-blue-800 font-semibold"
                                : "hover:bg-gray-100"
                            }`}
                            >
                            {song}
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;