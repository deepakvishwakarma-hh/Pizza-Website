import React from 'react'
import Styles from "../../styles/Home.module.css"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ToppinsData } from './Data'
export default function UpdateToppins({ toNext, updateToppins }) {
    const [toppins, addTopins] = useState([])
    const [showAleart, setShowAleart] = useState(false)
    const addToppinsButtonList = ToppinsData.map((v, i) => {
        return (
            <button className={Styles.ToppinsButton} onClick={() => { addTopins([...toppins, v.name]); setShowAleart(false) }
            }>{v.name}</button>
        )
    })
    const addedToppinsButtonList = [...new Set(toppins)].map((v, i) => {
        return (
            <li className={Styles.listedItems}><h3>{v}</h3> <button onClick={() => {
                const RetriveData = toppins.filter((value, index) => {
                    return value !== v
                })
                addTopins(RetriveData)
            }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg></button></li >
        )
    })
    return (
        <motion.main animate={{ y : [1000, 0]}} transition={{ type: "spring", damping: 3, ease: [0.075, 0.82, 0.165, 1] }}>
            <div className={Styles.child_one}>
                <h1>Choose your favroite Toppins </h1> <br />
                <small>select Toppins for pizza <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF6D21" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg> </small> 
                {addToppinsButtonList}
                <br /> <br />
                <div>
                    <button onClick={() => {
                        if (toppins.length > 0) {
                            toNext(2);
                            updateToppins(toppins)
                        } else {
                            setShowAleart(true)
                        }
                    }}>Select Toppins</button>
                    <button onClick={() => { toNext(0) }}>Go back</button>
                </div>
            </div>
            <div className={Styles.child_two}>
                {showAleart && <h5>! Please Select atleast one Toppins</h5>}
                <ul>
                    {addedToppinsButtonList}
                </ul>
            </div>
        </motion.main >
    )
}