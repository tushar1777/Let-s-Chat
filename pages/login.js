import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <head>
        <title>Login</title>
      </head>
      <LoginContainer>
        <Logo src='https://lh3.googleusercontent.com/proxy/CLf7cB9S_BIf4CbfNcu5gPr0jNygCvYlqZH95R9URAdsV06GS1LsItw93ZHE-2IzKYXgHgTzpwXJXpsjLEOZ7BC-ADFCGpk8Le5C2nmKjkahvttTi0LPYfdAFcx2iU6wAA_j' />
        <Button style={{backgroundColor: '#81dff3', color: 'whitesmoke'}} onClick={signIn}>Sign in with Google</Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 24px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
