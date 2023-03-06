import React, { useContext, useEffect } from "react";
import "./cart.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../App";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const removeFromCart = (item) => {
    const newCart = cart.filter((c) => c.code !== item.code);
    localStorage.setItem("food_cart", JSON.stringify(newCart));
    let data = JSON.parse(localStorage.getItem("food_cart"));
    setCart(data);
    console.log(newCart);
  };

  const increaseQuantity = (item) => {
    let pickExistingItem = cart.filter((c) => c.code === item.code);

    if (pickExistingItem.length !== 0) {
      pickExistingItem.map((i) => (i.quantity += 1));

      localStorage.setItem("food_cart", JSON.stringify(cart));
      let newCart = JSON.parse(localStorage.getItem("food_cart"));
      setCart(newCart);
    }
  };

  const decreaseQuantity = (item) => {
    console.log(item);
    let pickExistingItem = cart.filter((c) => c.code === item.code);

    if (pickExistingItem.length !== 0) {
      pickExistingItem.map((i) => (i.quantity -= 1));

      localStorage.setItem("food_cart", JSON.stringify(cart));
      let newCart = JSON.parse(localStorage.getItem("food_cart"));
      setCart(newCart);
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="cart__container">
      <h6 className="cart__container__title">Cart</h6>

      <section className="container-grid">
        <Table>
          <thead>
            <tr>
              <th></th>
              <th colSpan={1}>Item</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td style={{ textAlign: "left" }}>{item.name}</td>
                <td style={{ fontSize: "20px" }}>
                  <Button
                    disabled={item.quantity <= 1 ? true : false}
                    onClick={() => decreaseQuantity(item)}
                    variant="secondary"
                    style={{ padding: "2px 8px" }}
                  >
                    -
                  </Button>
                  <span style={{ padding: "5px" }}>
                    {item.quantity ? item.quantity : 0}
                  </span>
                  <Button
                    onClick={() => increaseQuantity(item)}
                    variant="secondary"
                    style={{ padding: "2px 8px" }}
                  >
                    +
                  </Button>
                </td>
                <td>{item.price}</td>
                <td>{item.price * item.quantity}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(item)}
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <aside className="cart-totals">
          <Table>
            <tbody>
              <tr>
                <td>Number Of Items</td>
                <td>{cart.length}</td>
              </tr>
              <tr>
                <td>Total Cost</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </aside>
      </section>
    </div>
  );
};

export default Cart;
