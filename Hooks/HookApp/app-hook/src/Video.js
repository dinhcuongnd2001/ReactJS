import download from './video/download.mp4'
import  {forwardRef, useEffect, useImperativeHandle, useRef} from 'react'
function Video(props, ref){
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }));
    return (
        <video 
            ref={videoRef}
            src= {download}
            width= '200px'
        />
    )
}

export default forwardRef(Video);