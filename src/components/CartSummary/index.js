// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="cart-summary-value">
              <span className="total-value-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button
              type="button"
              className="checkout-btn desktop-view-checkout-btn"
            >
              Checkout
            </button>
          </div>
          <button
            type="button"
            className="checkout-btn mobile-view-checkout-btn"
          >
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
