import React, { useEffect, useState } from 'react'
import { Message } from './Message';

import "../../styles.css";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() => {
        console.log('useEffect de name');
    }, [name]);

    useEffect(() => {
        console.log('useEffect de email');
    }, [email]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

  return (
    <>
        <h1>useEffect</h1>
        <hr/>

        <div className='form-group'>
            <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Ingese su nombre'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
            />

        </div>

        <div className='form-group'>
            <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Ingese su email'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
            />

        </div>

        {name && <Message name={name}/>}

    </>
  )
}
