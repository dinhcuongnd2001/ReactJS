import {useState, useEffect } from 'react'

function PracticeUseEffect() {
    const [avatar , setAvatar ] = useState();

    useEffect(() => {
        // clean Up
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])

    function handleOnChange(e) {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        console.log(file.preview);
        setAvatar(file);
    }
    return (
        <div>
           <input
                type= 'file'
                onChange={handleOnChange}
           />

           {avatar && (<img
                src={avatar.preview}
                alt = 'anh_Loi'
                width = '80%'
           />)}

        </div>
    )
}

export default PracticeUseEffect;