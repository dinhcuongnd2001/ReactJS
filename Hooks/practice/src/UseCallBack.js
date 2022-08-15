import {memo} from 'react'
function UseCallBack({onIncrease}){
    console.log('hello');
    return (
        <>
            <button onClick={onIncrease}>Click Me!</button>
        </>
    )
}
// export default UseCallBack;
export default memo(UseCallBack);