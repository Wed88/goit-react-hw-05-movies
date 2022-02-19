import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Wrapper, Nav, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/Home">Home</Link>
        <Link to="/Movies">Movies</Link>
      </Nav>
      <Outlet />
      <GlobalStyle />
    </Wrapper>
  );
};
