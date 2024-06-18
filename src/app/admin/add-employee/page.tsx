'use client'
import React, { useEffect } from 'react'

import styles from './page.module.css'

function page() {
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = { name, phone, email }; // Assuming 'name', 'phone', and 'email' are available in the scope

    try {
        const response: Response = await fetch('http://127.0.0.1:5000/api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Send data as JSON in the request body
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        console.log(data);
        window.location.href = '/admin';

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    };
        return (
            <div className={styles.main}>
          
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Add Employee</h2>
                    <label>
                        Name:
                        <input type="text" name="name" id='name' placeholder="John Appleseed" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                    </label>
                    <label>
                        Phone:
                        <input type="number" name="phone" id="phone" placeholder='9876543210' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" id="email" placeholder='johnappleseed@mail.com' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                    </label>
                    <button type="submit">Add Employee</button>
                </form>
            </div>
        )
    }
    export default page;