import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function Cart() {
  const cartCTX = useContext(CartContext);

  const cartTotal = cartCTX.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * isTemplateMiddle.price,
    0
  );
  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCTX.items.map((item) => (
          <li key={item.id}>
            {item.name}-{item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go To Checkout</Button>
      </p>
    </Modal>
  );
}
