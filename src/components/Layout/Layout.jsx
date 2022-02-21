import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { Wrapper, Nav, Link } from './Layout.styled';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/Home">Home</Link>
        <Link to="/Movies">Movies</Link>
      </Nav>
      <Outlet />
      <GlobalStyle />
      <ToastContainer position="top-center" autoClose={3000} />
    </Wrapper>
  );
};
