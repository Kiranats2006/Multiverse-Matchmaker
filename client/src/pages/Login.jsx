import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", {
                email,
                password
            });
            // console.log(response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            navigate('/dashboard'); 
        } catch (error) {
            console.error(error);
            alert("Login failed. Check your credentials and try again.");
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-900 to-black flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 
                        className="text-4xl font-bold text-yellow-400 mb-2 tracking-wide"
                        style={{ fontFamily: "'Bangers', cursive" }}
                    >
                        MARVEL MATCHMAKER
                    </h1>
                    <p className="text-gray-300">Access Your Hero Dashboard</p>
                </div>
                
                <form onSubmit={handleLogin} className="bg-black bg-opacity-70 rounded-lg shadow-lg p-8 border-2 border-red-700">
                    <div className="mb-6">
                        <label 
                            className="block text-yellow-400 text-sm font-bold mb-2"
                        >
                            SHIELD COMMUNICATOR
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 bg-gray-900 text-white border-b-2 border-red-700 focus:outline-none focus:border-yellow-500 transition"
                            placeholder="Enter your agent ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-8">
                        <label 
                            className="block text-yellow-400 text-sm font-bold mb-2"
                        >
                            SECRET CODE
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 bg-gray-900 text-white border-b-2 border-red-700 focus:outline-none focus:border-yellow-500 transition"
                            placeholder="Enter your clearance code"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-red-700 hover:bg-yellow-500 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105"
                    >
                        ACCESS S.H.I.E.L.D. DATABASE
                    </button>
                    
                    <p className="text-gray-400 text-center mt-4 text-sm">
                        New recruit? <a href="/register" className="text-yellow-400 hover:underline">Register for clearance</a>
                    </p>
                </form>
                
                <div className="mt-8 text-center text-gray-400 text-xs">
                    <p>© 2023 MARVEL MATCHMAKER. ALL RIGHTS RESERVED.</p>
                    <p className="mt-1">AUTHORIZED PERSONNEL ONLY</p>
                </div>
            </div>
        </div>
    )
}