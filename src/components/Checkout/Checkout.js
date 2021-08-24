import styles from './Checkout.module.css';
import React from 'react'

import { connect } from "react-redux"

const Checkout = ({ cart }) => {
  return (
    <div className={styles.checkout}>
     <form>
     <div>
  <label htmlFor="inputBuyerEmail" className={styles.checkout_input}>
    Email:
    <input type="text" name="buyerEmail" />
  </label>
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