import React, {useEffect,useRef,useState} from 'react'
import VIDEO from '../hooksEx/video.mp4';

const RefEx = () => {
    const [play, setPlay]=useState(true);
    const eleRef=useRef();
    let videoRef=useRef();
    console.log(videoRef);
    // console.log(eleRef);
    useEffect(()=>{
         eleRef.current.style.color="crimson";
         eleRef.current.innerText="React ref"
    })

    let playORPause=()=>{
        if(play==true){
            videoRef.current.play();
            console.log(play);
            setPlay(false);
        }else{
            videoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
  return (
    <div>RefEx
        <h1 ref={eleRef}>RefExample</h1>
        <video src={VIDEO} ref={videoRef} onClick={playORPause}></video>
    </div>
  )
}

export default RefEx
