'use client'
import React from 'react'
import { useEffect, useState } from 'react'

import styles from './page.module.css'
import Link from 'next/link';

// Update the EmpCardProps interface
interface EmpCardProps {
    entry: Array<string>;
    name: string;
    phone: string;
    email: string;
    id: string;
}

// Inside your fetchEmployees function, transform the data


function EmpCard(props: EmpCardProps) {
    const { name, phone, email, entry } = props;
    return (
        <div className={styles.empCard}>
            <div className={styles.empCardHeader}>
                <img src="https://via.placeholder.com/150" alt="Employee" />
            </div>
            <div className={styles.empCardBody}>
                <h3>{name}</h3>
                <p>Phone: {phone}</p>
                <p>Mail: {email}</p>
        </div>
        <div className={styles.entry}>
          <div className={styles.scrollable}>
            <ul>
              {entry.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          </div>
        </div>
        </div>
    )
}

function page() {
    const [emps, setEmps] = useState<EmpCardProps[]>([]);

  useEffect(() => {
  async function fetchEmployees() {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/employees`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("Received data is not an array");
      }
      const dataTransformed = data.map((emp: any) => ({
        name: emp.empName,
        phone: emp.empPhone,
        email: emp.empMail,
        entry: emp.entry,
        id: emp._id.$oid,
      }));
      setEmps(dataTransformed);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    }
  }
  fetchEmployees();
}, []);
    
    useEffect(() => {
}, [emps]); // This useEffect will run after `emps` has been updated

    // const emps = [{id: 1, name: 'John Doe', phone: '1234'}, {id: 2, name: 'Jane Doe', phone: '5678'}, {id: 3, name: 'John Smith', phone: '91011'}, {id: 4, name: 'Jane Smith', phone: '121314'}]
  return (
    <div className={styles.main}>
          <div className={styles.employeesWrapper}>
              <div className={styles.header}>
                  <h2>Employees</h2>
                  <Link href="/admin/add-employee" className={styles.newemp}> 
                      Add
                  </Link>
              </div>
              <div className={styles.empgrid}>
                  {emps.map(emp => (
                      <EmpCard key={emp.id} name={emp.name} phone={emp.phone} id={emp.id} email={emp.email} entry={emp.entry} />
                    ))}
              </div>
          </div>
    </div>
  )
}

export default page