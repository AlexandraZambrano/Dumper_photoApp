import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext);
};

const LOGIN_URL = 'http://127.0.0.1:8000/auth/login';
const REGISTER_URL = 'http://127.0.0.1:8000/auth';


function AuthProvider({ children }) {
    const [userLogin, setUserLogin] = useState(null);

    const [ user, setUser ] = useState({
        uname: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const login = (userData) => {


        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            };

            fetch(LOGIN_URL, options)
                .then((res) => res.json())
                .then((data) => {
                    setUserLogin(data)
                    localStorage.setItem("token", data.token)
                    console.log(data)
                });

            console.log(data)
            localStorage.setItem("token", data.token)

            console.log('Logged in!');
        } catch {
            console.log('Login failed.');
        }
    }

    const register = (data) => {

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        try {
            
            fetch(REGISTER_URL, options)
            .then(res => res.json())
            .then(data => console.log(data))

            console.log('listo!')

        } catch {
            console.log('no funciona')
        }
    }

    const token = localStorage.getItem('token')
    
    const findToken = () => {


        if(!token  || token === null){
            navigate("/login")
        }
    }


    return (
        <AuthContext.Provider value={{ login, userLogin, register, user, setUser, findToken, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider