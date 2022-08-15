import { memo, useMemo, useRef, useState } from "react"

function UseMemo(){
    function handleClick() {
        setProduct(pre => {
            return [...pre, {name, price: parseInt(price)}]
        })
        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    function handleDelete(item) {

        setProduct(() => {
            return product.filter(pro => {
                return pro.name !== item.name;
                })
        });
    }
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState([]);
    const nameRef = useRef();
    const total = useMemo(() => {
        const result = product.reduce((pre, cur) => pre + cur.price, 0);
        // console.log('da vao day r');
        return result;
    },[product])
    
    return (
        <div style={{marginTop:20}}>

            <input 
            ref = {nameRef}
            value={name} 
            placeholder="Enter your name..."
            onChange={e => setName(e.target.value)}/>
            <br></br>

            <input 
            value={price} 
            placeholder="Enter price ..."
            onChange={e => setPrice(e.target.value)}/>
            
            <br></br>
            <button onClick={handleClick}>Add</button>
            <br></br>
            <p> total: {total}</p>
            <br></br>
            <ul>
                {product.map((item) => 
                    <div key={item.name}>
                        <li>{item.name} - {item.price}</li>
                        <button onClick={() => handleDelete(item)}>Delete Item</button>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default memo(UseMemo);