import { useSelector } from "react-redux";

import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={styles.cart}>
      <h2>Мои Покупки</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
            price={item.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
