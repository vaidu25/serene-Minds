import { Button } from '@mantine/core';

const LoginButton = () => {
  return (
    <Button color="red" variant="filled" onClick={() => alert('Login successful!')}>Login</Button>
  );
};

export default LoginButton;