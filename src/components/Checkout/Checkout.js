import React from 'react';
import styles from "./Checkout.module.css";

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");



export default function Checkout() {

    onChangeHandler = (e) => {
        
    }
     
    return (
        <div className={styles.checkout}>
        <div className={styles.checkout_form}>
        <input
        id="component-firstName"
        
        >

        </input>

        </div>
        
      
        </div>
    )
}
