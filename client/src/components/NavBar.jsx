import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

export default function NavBar() {
  return (
    <Container>
      <Logo>👑KING</Logo>
      <Tabs>
        <MenuItem to="/Timer">Timer</MenuItem>
        <MenuItem to="/Profile">Profile</MenuItem>
        <MenuItem to="/Analytics">Analytics</MenuItem>
        <Outlet />
      </Tabs>
      <UserIconContainer>
        <UserIcon />
      </UserIconContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  height: 60px;
  background-color: #979393;
  align-items: center;
  top: 0;
  z-index: 2;
  position: sticky;
`;
const Logo = styled.div`
  position: relative;
  left: 3%;
  width: 155px;
  height: 40px;
  vertical-align: middle;
  text-align: center;
  font-size: 40px;
  border-color: 1px solid grey;
  color: #AE3139;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
const Tabs = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  left: 15%;
  font-size: 10px;
`;
const MenuItem = styled(Link)`
  text-transform: uppercase;
  text-decoration: unset;
  color: rgb(244 243 243 / 90%);
  font-size: 18px;
  &:hover {
      cursor: pointer;
      text-decoration: underline;
      opacity: 0.8;
      text-shadow: 0 0 10px white;
    }
`;
const UserIconContainer = styled.div`
  position: absolute;
    left: 90%;
    top: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80px;
`;
const UserIcon = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: #E5E5E5;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 3px rgb(241 229 229 / 67%);
  }
`;
