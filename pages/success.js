import { useEffect } from 'react';
import Page from '../components/styled/Page';
import useCart from '../hooks/useCart';

const Success = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  });

  return (
    <Page>
      <h2>Successfully charged</h2>
      <p>Thank you for your puchase</p>
    </Page>
  );
};

export default Success;
