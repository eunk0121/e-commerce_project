import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import useCart from '../hooks/useCart';

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background: white;
  width: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const X = styled(FiX)`
  font-size: 3rem;
  &:hover {
    cursor: pointer;
  }
`;

const Xcontainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  padding: 1rem 2rem;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 400;
`;

const Cart = () => {
  const handleClick = () => {};

  return (
    <Container>
      <Xcontainer>
        <X onClick={handleClick} />
      </Xcontainer>
      <p>I am a cart!</p>
    </Container>
  );
};

export default Cart;
