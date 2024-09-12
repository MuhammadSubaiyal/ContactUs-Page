import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import Buttons from '../Buttons/Buttons';
import styles from './Form.module.css'

export default function Form() {
    return (
        <section className={`${styles.container}`} >
            <div className={`${styles.form}`}>
                <div className={`${styles.but}`}>
                    <Buttons text={"VIA SUPPORT CHAT"} icon={<BiMessageDetail />} />
                    <Buttons text={"VIA CALL"} icon={<IoCallOutline />} /></div>
                <Buttons islong={true} text={"VIA EMAIL FORM"} icon={<BiMessageDetail />} />

                <form action="">
                    <div className={styles.name}>
                        <label htmlFor="">Name</label>
                        <input type="text" /></div>

                    <div className={styles.email}>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>
                    <div className={styles.textarea}>
                        <label htmlFor="">Text</label>
                        <textarea name="" id="" cols="55" rows="5"></textarea>
                    </div>
                    <button className={styles.submit}>
                        SUBMIT
                    </button>


                </form>
            </div >
            <div className="pic">
                <img src="/images/pic.svg" height={"350px"} width={"100%"} alt="" />
            </div>
        </section >
    )
}
