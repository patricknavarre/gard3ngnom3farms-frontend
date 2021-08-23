import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-action-creators";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem_image}
        src={current.image}
        alt={current.title}
      />
      <div className={styles.singleItem_details}>
        <p className={styles.details_title}>{current.title}</p>
        <p className={styles.details_description}>{current.description}</p>
        <p className={styles.details_price}>$ {current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
          className={styles.details_addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
