import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (userType === 'artisan') {
            navigate('/artisan-dashboard');
        } else if (userType === 'customer') {
            navigate('/customer-dashboard');
        } else if (userType === 'cultural-consultant') {
            navigate('/cultural-consultant-dashboard');
        }
    };

    // Admin login button function
    const handleAdminLogin = () => {
        navigate('/admin-dashboard');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="user-type">I am a:</label>
                    <select 
                        id="user-type" 
                        value={userType} 
                        onChange={(e) => setUserType(e.target.value)} 
                        required
                    >
                        <option value="" disabled>Select type</option>
                        <option value="artisan">Artisan</option>
                        <option value="customer">Customer</option>
                        <option value="cultural-consultant">Cultural Consultant</option>
                    </select>
                </div>
                <button type="submit" className="login-button">Login</button>
                <div className="signup-redirect">
                    <p>Not signed up? <a href="/signup">Sign up here</a></p>
                </div>
            </form>
            {/* Admin login button */}
            <button className="admin-btn" onClick={handleAdminLogin}>Admin Login</button>
        </div>
    );
};

export default Login;
