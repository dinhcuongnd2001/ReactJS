import { useEffect, useRef, useState } from "react";
let index = 1;
function UseRef(){
    const currentCount = useRef(0);
    const [count, setCount] = useState(0);
    currentCount.current = count;

    const [student, setStudent] = useState({name: 'Dinh Nhu Cuong', dob: '03-06-2001'});
    // useEffect(()=> {},[])
    // const handleIncre = () => {
    //     setCount(pre => pre+1);
    // }
    // console.log('index', (index));
    // const handleDescre = () => {
    //     // currentCount.current = count;
    //     setCount(pre=> pre-1);
    // }
    useEffect(()=> {
        console.log(index);
        setStudent(()=>{
            console.log('co vao day', index);
            // return count+1;
        }); 
        index = index + 1;
        console.log('index', (index));     
    })   
    function handleClick(){ 
        setCount(count+1);
    }
    return (
        <div>
            {/* <h1>Nhiệt Độ Hiện Tại: {currentCount.current}</h1>
            <button onClick = {handleIncre}>Increment</button>
            <button onClick = {handleDescre}>Descrement</button> */}
            <h1>{count}</h1>
            <button onClick = {handleClick}>Click here</button>
        </div>
    );
}

export default UseRef;