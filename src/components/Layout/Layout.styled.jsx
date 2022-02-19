import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 12px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;
