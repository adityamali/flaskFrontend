'use client'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import styles from './Entry.module.css'

function Entry() {

    const [success, setSuccess] = React.useState(false)
    const [empName, setEmpName] = React.useState('')

    useEffect(() => {
        setTimeout(() => {
            setSuccess(false)
        }, 3000)
    }, [success])


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (empName) {
            const empx = await fetch( `http://127.0.0.1:5000/api/stamp/${empName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await empx.json();
            console.log(data)
        }
    }
    
  return (
      <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 className={styles.title}>Punching Machine</h1>
                <p className={styles.description}>Enter your ID below to punch attendence with timestamp. </p>  
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your ID" className={styles.input} onChange={(e) => setEmpName(e.target.value)} />
                <button type="submit" className={styles.button}>Punch</button>
            </form>
        {success && (
              <p className={styles.success}>Welcome { empName }</p>
        )}
        </div>
  )
}

export default Entry