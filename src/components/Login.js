import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [storeID, setStoreID] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post('https://api.example.com/login', {
        username,
        password,
        store_id: storeID
      }, {
        headers: {
          'Accept': 'application/json'
        }
      });

      // Handle successful login response here

    } catch (error) {
      console.error(error);
      // Handle login error here
    }

    setIsLoading(false);
  };

  return (

    <div>
      <h1 className='text-center mt-3'>Welcome</h1>
      <div className="d-flex align-items-center" style={{ height: '100vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Login</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <div className='form-group mt-3'>
                      <label>Store ID</label>
                      <input type="text" value={storeID} onChange={(e) => setStoreID(e.target.value)} />
                    </div>
                    <div className='text-center mt-3'>
                      <Link to={'/products'}>
                        <button className="btn btn-success" id='butn' type="submit" disabled={isLoading} >
                        {isLoading? 'Logging in...' : 'Login'} </button>
                      </Link>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>











    // <div className="login-container">
    //   <h2>Login</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label>Username</label>
    //     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

    //     <label>Password</label>
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

    //     <label>Store ID</label>
    //     <input type="text" value={storeID} onChange={(e) => setStoreID(e.target.value)} />

    //     <button type="submit" disabled={isLoading}>
    //       {isLoading ? 'Logging in...' : 'Login'}
    //     </button>
    //   </form>
    // </div>


  );
}

export default Login;

