import Page from '../components/styled/Page';
import useCart from '../hooks/useCart';
import styled from 'styled-components';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin-bottom: 1rem;
`;

const Ul = styled.ul`
  padding: 0;
`;
const Total = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const Button = styled.button`
  background: #7e6def;
  font-size: 2rem;
  color: inherit;
  outline: none;
  border: none;
  width: 100%;
  padding: 1rem;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const Checkout = () => {
  const { cart, total } = useCart();

  const processPayment = async () => {
    const url = '/.netlify/functions/charge-card';
    const newCart = cart.map(({ id, qty }) => ({
      id,
      qty,
    }));

    const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY);
    const { data } = await axios.post(url, { cart: newCart });
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  // let total = 0;
  // cart.forEach((item) => (total += item.price * item.qty));

  return (
    <Page>
      <h2>checkout!</h2>
      {cart.length > 0 ? (
        <>
          <Ul>
            {cart.map((item) => {
              return (
                <Item>
                  <span>
                    {item.qty} x {item.name}
                  </span>
                  <span>${item.price / 100}</span>
                </Item>
              );
            })}
          </Ul>
          <Total>
            <span>Total</span>
            <span>${total / 100}</span>
          </Total>
          <Button onClick={processPayment}>Process Payment</Button>
        </>
      ) : (
        <p>You do not appear to have any items in your cart!</p>
      )}
    </Page>
  );
};

export default Checkout;
