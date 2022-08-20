import {useState} from 'react'

import LoginForm from './components/LoginForm';
function App() {
    // tao ra mot tk user de check, sau nay phat trien thi no la 1 datatbase luu tru
    // du lieu de kiem tra
    const adminUser =  {
        email: 'admin@admin.com',
        password: 'admin123'
    }

    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");

    const Login = detail =>{
        console.log(detail);
        if(detail.email === adminUser.email && detail.password === adminUser.password){
            setUser({
                name: detail.name,
                email: detail.email
            });
            
        }
        else{
            setError('Details no match')
        }
    }

    const Logout = () => {
        setUser({name:"", email:""});
    }

    return (
        <div className='App'>
            { (user.name != "") ?
                <div className='welcome'>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
                :
                <LoginForm 
                    Login = {Login} 
                    error = {error}
                />
            }
        </div>
    )
}

export default App;
