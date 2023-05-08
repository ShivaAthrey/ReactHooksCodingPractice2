import {useState} from 'react'
import {
  Bgcontainer,
  Container,
  Heading,
  Paragraph,
  Input,
  Para,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const [message, setMessage] = useState(
    'Your password must be at least 8 characters',
  )

  const handleOnChange = e => {
    setPassword(e.target.value)
    const regExp =
      /^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$/gm
    if (password === '') {
      setMessage('Your password must be at least 8 characters')
    } else if (regExp.test(password)) {
      setMessage('')
    } else if (!regExp.test(password)) {
      setMessage('Your password must be at least 8 characters')
    } else if (password.length >= 8) {
      setMessage('')
    }
  }

  return (
    <Bgcontainer>
      <Container>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" value={password} onChange={handleOnChange} />
        {password.length < 8 && (
          <Para>Your password must be at least 8 characters</Para>
        )}
      </Container>
    </Bgcontainer>
  )
}

export default PasswordValidator
