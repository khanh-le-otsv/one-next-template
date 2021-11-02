import * as React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FormEvent } from 'react';

export default function TestReactPage() {
  const [email, setEmail] = React.useState<string>('test@gmail.com');
  const [password, setPassword] = React.useState<string>('');
  const [emailError, setEmailError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (email.length < 6) {
      setEmailError('Email is too short');
    } else {
      setEmailError(null);
    }
  }, [email]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const text = event.target.value;
    setEmail(text);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const text = event.target.value;
    setPassword(text);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(`Submitting with email: ${email} & password: ${password}`);
  };

  return (
    <Form onSubmit={handleSubmit} method="POST">
      <InputGroup hasValidation>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          size="sm"
          isInvalid={!!emailError}
        />
        <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
      </InputGroup>

      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control id="password" name="password" type="password" value={password} onChange={handlePasswordChange} />

      <Button type="submit">Login</Button>
    </Form>
  );
}
