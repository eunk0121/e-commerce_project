import Link from 'next/link';
import styled from 'styled-components';
import UnstyledLink from './styled/UnstyledLink';

const Nav = styled.nav`
  background: white;
  padding: 2rem;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  font-size: 2rem;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <Link href="/">
          <UnstyledLink>Super Store</UnstyledLink>
        </Link>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
