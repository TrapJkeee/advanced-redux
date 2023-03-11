import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, quantity, totalPrice, price } = props;

  const dispatch = useDispatch();

  const addItemInCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
      })
    );
  };
  const removeItemInCartHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={styles["item-price"]}>
            (${price.toFixed(2)} / шт.)
          </span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removeItemInCartHandler}>-</button>
          <button onClick={addItemInCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
