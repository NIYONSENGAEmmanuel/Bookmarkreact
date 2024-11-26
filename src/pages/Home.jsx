

import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleShowName = () => {
    if (name.trim() === "") {
      setDisplayName("You need to provide a name");
    } else {
      setDisplayName(name);
    }
  };


  const handleClear = () => {
    setName("");
    setDisplayName("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col space-y-4 items-center bg-slate-300 px-40 py-20 rounded-lg">
        <p className="text-lg font-semibold text-gray-700">
          {displayName || "You need to provide a name"}
        </p>
        <input
          className="border-2 border-gray-400 p-2 rounded w-64"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex space-x-4">
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleShowName}
          >
            Show Name
          </button>
          <button
            className="bg-blue-800 text-white px-7 py-2 rounded hover:bg-red-700"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;