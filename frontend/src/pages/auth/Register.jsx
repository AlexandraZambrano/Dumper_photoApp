import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';


function Register() {

    const { user, register, setUser } = useAuth()

    const { uname, email, password } = user


    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        register(user)

    }

    return (
            <div>
                    <section>
                        <h1>User Registration</h1>
                        <div className='box-registration'>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='username'>Email</label>
                                <input
                                    type='text'
                                    name='email'
                                    id='email'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    value={email}
                                    required
                                    className='text-purple'
                                />

                                  <label htmlFor='username'>Username</label>
                                  <input
                                      type='text'
                                      id='username'
                                      name='uname'
                                      autoComplete='off'
                                      onChange={handleChange}
                                      value={uname}
                                      required
                                    className='text-purple'

                                  />

                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    onChange={handleChange}
                                    value={password}
                                    required
                                    className='text-purple'

                                />
                                <button className='btn'>Register</button>
                            </form>
                        </div>
                    </section>
            </div>
    )
}

export default Register