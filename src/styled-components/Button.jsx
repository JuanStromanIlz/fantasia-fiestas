import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: none;
  font: inherit;
  margin: 0;
  border-radius: 25px;
  background: ${props => props.theme.purple};
  color: white;
  padding: 0 2.4rem;
  span {
    line-height: 40px;
    font-family: 'Poppins', sans-serif;
  }
`;

export default Button;