"use client"
import styles from '@/app/styles/page.module.css'
import {handleSubmit} from "@/app/page";
import React, {useState} from 'react'

export default function Forms(){
    let [name, setName] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
    }
    return(
        <form onSubmit={
            (e) => {
                e.preventDefault()
                handleSubmit(name).then((res)=>
                console.log(res))
                    .catch((err)=>{
                        console.error(err)
                    })
            }
        }
              className={styles.sec2}>
            <input
                name="name"
                placeholder="Ajourter un nouveau projet"
                onChange={handleChange}/>
            <button type="submit">+</button>
        </form>
    )
}
