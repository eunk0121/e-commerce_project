import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import Navbar from '../components/Navbar';
import CartProvider from '../context/Cart';
import Cart from '../components/Cart';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  //background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  background: #eee;
  font-family: 'Lato', sans-serif;
  color: #444;
  min-height: 100vh;
`;

const Page = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Container>
        <Normalize />
        <Navbar />
        <Page>
          <Component {...pageProps} />
        </Page>
        <Cart />
      </Container>
    </CartProvider>
  );
};

export default MyApp;
