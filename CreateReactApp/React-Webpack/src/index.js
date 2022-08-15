import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>Check log terminal</h2>
            <h3>Let check the log in terminal one more time</h3>
        </div>
    )
}

// Render component App vào #root element React@17
// ReactDOM.render(<App />, document.getElementById('root'))

// React@18

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

