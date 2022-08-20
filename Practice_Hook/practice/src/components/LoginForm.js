import React, {useState} from 'react'

function LoginForm({Login, error}) {
    const [detail, setDetail] = useState({name:"", email:"", password:""});
    const submitHandler = e => {
        e.preventDefault();
        Login(detail);
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {(error != "") ? 
            <div className='error'>{error}</div>
            : ""
            }
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input 
                    type='text' 
                    name='name' 
                    id='name'
                    value={detail.name}
                    onChange={e => setDetail(pre =>{
                        return {
                            ...pre,
                            name: e.target.value
                        }
                    })}
                    />
            </div>

            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input 
                    type='email' 
                    name='email' 
                    id='email'
                    value={detail.email}
                    onChange={e => setDetail(pre =>{
                        return {
                            ...pre,
                            email: e.target.value
                        }
                    })}
                    />
            </div>

            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input 
                    type='password' 
                    name='password' 
                    id='password'
                    value={detail.password}
                    onChange={e => setDetail(pre =>{
                        return {
                            ...pre,
                            password: e.target.value
                        }
                    })}
                />
            </div>
            
            <input type='submit' value="Login"/>

        </div>
    </form>
  )
}

export default LoginForm
