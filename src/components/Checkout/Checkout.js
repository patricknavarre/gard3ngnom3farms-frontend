import styles from './Checkout.module.css';
import React , {useState} from 'react'
import DatePicker from 'react-date-picker';

import { connect } from "react-redux"

const Checkout = ({ cart }) => {

  const [value, onChange] = useState(new Date())
  return (
    <div className={styles.checkout}>
     <form>
     <div>
    <h2>Please Enter Your Email & Date You'd Like to Pickup your Order, Thank You!</h2>
  <label htmlFor="inputBuyerEmail" className={styles.checkout_input}>
    Email:
    <input type="text" name="buyerEmail" />
  </label>
     </div>
     <div>
  <DatePicker 
   onChange={onChange}
   value={value}
   className={styles.datepicker}/>
     </div>
  <input type="submit" value="Submit" />
</form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Checkout)