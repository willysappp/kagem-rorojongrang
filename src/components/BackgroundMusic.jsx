import React, { useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // kalau belum play
    if (!playing) {
      // play() sekarang harus manual di user interaction (klik)
      audio
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch((err) => {
          console.log("⚠️ Gagal mulai musik:", err);
        });
    } else {
      // pause
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div>
      {/* tombolnya */}
      <div
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 100,
          background: playing
            ? "rgba(255,77,109,0.8)"
            : "rgba(255,204,213,0.7)",
          borderRadius: "50%",
          padding: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          color: "white",
          cursor: "pointer",
          fontSize: "1.3rem",
          userSelect: "none",
          transition: "all 0.3s ease",
        }}
      >
        {playing ? "🔇" : "🎵"}
      </div>
      

      {/* musiknya */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={process.env.PUBLIC_URL + "/music/music1.mp3"}
      />
    </div>
  );
}
