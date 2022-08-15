import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums'];
function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setshowGoToTop] = useState('false');
    // console.log(type);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            }) 
        
    },[type])

    useEffect(() => {
        function handleScroll() {
            setshowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)
        // cleanup function
        return () => {
            console.log('Unmounting ... ');
            window.removeEventListener('scroll',handleScroll);
        } 
    },[])


    return (
        <div>
            {tabs.map(tab => 
                <button 
                    key={tab} 
                    style = {type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'

                    } : {}}
                    onClick = {() => setType(tab)}
                >
                    {tab}
                </button>
            )}
            <br></br>
            <input
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
            />
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title || post.name}</li>)
                }
            </ul>
            {showGoToTop && 
            (<button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                }}
            >
                Go to Top
            </button>)}
        </div>
    )
}

export default Content