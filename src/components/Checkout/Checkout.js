import React from 'react';
import styles from "./Checkout.module.css";

export default function Checkout() {

    onChangeHandler = (e) => {
        
    }
     
    return (
        <div>
            
            <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.onChangeHandler}
      />
      </form>

        </div>
    )
}
