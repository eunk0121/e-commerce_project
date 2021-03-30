import Link from 'next/link';
import styled from 'styled-components';
import UnstyledLink from './styled/UnstyledLink';
import { FiShoppingCart } from 'react-icons/fi';

const Nav = styled.nav`
  background: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  font-size: 2rem;
`;

const ShoppingCart = styled(FiShoppingCart)`
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Navbar = () => {
  const handleClick = () => {
    console.log('open cart');
  };
  return (
    <NavContainer>
      <Nav>
        <Link href="/">
          <UnstyledLink>Super Store</UnstyledLink>
        </Link>
        <ShoppingCart onClick={handleClick} />
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
