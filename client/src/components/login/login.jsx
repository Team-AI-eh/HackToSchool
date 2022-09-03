import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import firebaseui from 'firebaseui';

const ui = new firebaseui.auth.AuthUI(firebase.auth());

export default function Login() {
  return (
    <LoginComponent>
      <h1>Login Page!</h1>
    </LoginComponent>
  );
}

const LoginComponent = styled.div`
  display: flex;
`;
