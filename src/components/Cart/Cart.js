import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((item) => {
          const { title, price, quantity, id, total } = item;

          return (
            <CartItem
              key={id}
              item={{
                id,
                title,
                quantity,
                total,
                price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
