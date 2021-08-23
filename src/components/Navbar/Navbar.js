import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

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
        <img 
        className={styles.navbar_farm_icon}
        src="https://img.icons8.com/ios/452/farm.png"
        alt="farm-icon"
        />
        <img 
        className={styles.navbar_usa_icon}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvUJ6-07Lz3UsMQHb3TZLfv281i051rWPchZUxrtR7gKXR5YM293dQrEsPTz_RF8HjyA&usqp=CAU"
        alt="usa-icon"
        />
        <img 
        className={styles.navbar_usmc_icon}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6GtbRnD5tH0BGJieXTHx3erOplj_Rac1d_KXQaqKiev1OVpEFYhafjrFjZ080T2TjlE&usqp=CAU"
        alt="usmc-icon"
        />
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