import { useSelector, useDispatch } from "react-redux";
import { mainActions } from "../../store/main-slice";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const itemsQuantity = useSelector((state) => state.cart.itemsQuantity);
  const dispatch = useDispatch();

  const toggleVisibleCartHandler = () => {
    dispatch(mainActions.toggleCartVisible());
  };

  return (
    <button className={styles.button} onClick={toggleVisibleCartHandler}>
      <span>Корзина</span>
      <span className={styles.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
