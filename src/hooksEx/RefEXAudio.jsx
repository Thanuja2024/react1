import React, { useEffect, useRef, useState } from 'react';
import AUDIO from './audio.mp3'; // Make sure the path to the audio file is correct

const RefExAudio = () => {
    const [play, setPlay] = useState(false); // Audio should start as paused
    const eleRef = useRef();
    const audioRef = useRef();
    console.log(audioRef);

    useEffect(() => {
        // Changing the style and inner text of the element
        if (eleRef.current) {
            eleRef.current.style.color = "crimson";
            eleRef.current.innerText = "React Ref Example";
        }
    }, []); // Empty array means it only runs once when the component is mounted.

    const playORPause = () => {
        if (play) {
            audioRef.current.pause();
            setPlay(false);
            console.log("Audio is paused");
        } else {
            audioRef.current.play();
            setPlay(true);
            console.log("Audio is playing");
        }
    };

    return (
        <div>
            <h1 ref={eleRef}>Ref Example</h1>
            <audio ref={audioRef} src={AUDIO} />
            <button onClick={playORPause}>
                {play ? "Pause" : "Play"} Audio
            </button>
            <p>{play ? "Audio is playing" : "Audio is paused"}</p>
        </div>
    );
}

export default RefExAudio;
