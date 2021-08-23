import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar_logo}>Welcome To Gard3n Gnom3 Farms!</h2>
        <h3 className={styles.navbar_description}>Gard3n Gnom3 Farms is a small veteran owned garden that provides fresh, ORGANIC vegetables to the local Upper Cape Cod area.</h3>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar_cart}>
          <h3 className={styles.cart_title}>Cart</h3>
          <img
            className={styles.cart_image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className={styles.cart_counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);