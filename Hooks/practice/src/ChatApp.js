import { useEffect, useState } from "react";

const lessions = [
    {
        id: 1,
        name: 'ReacJS la gi? Tai sao nen hoc ReacJS'
    },

    {
        id:2,
        name: 'SPA/MPA la gi'
    },

    {
        id:3,
        name: 'Arrow function'
    }
];

function ChatApp() {

    const [lessionId, setLessionId] = useState(1);
    
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessionId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessionId}`, handleComment)
        }
    }, [lessionId])

    return (
        <div>
            <ul>
                {lessions.map(lession => {
                    return (
                    <li
                        key={lession.id}
                        style={{
                            color: lessionId === lession.id ? 'red' : '#333'
                        }}
                        onClick = {() => setLessionId(lession.id)}

                    >    
                        {lession.name}
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default ChatApp;