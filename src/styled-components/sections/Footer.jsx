import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 3.2rem 1.6rem;
  background: ${props => props.theme.green};
  font-size: 1.5rem;
  .media {
    display: flex;
    flex-direction: row;
    .media--icon {
      display: flex;
      img {
        height: 24px;
        display: block;
        margin: auto;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className='media'>
        <a href='/' className='media--icon'>
          <img src='/imgs/media/facebook.svg' alt='facebook'/>
        </a>
        <a href='/' className='media--icon'>
          <img src='/imgs/media/phone.svg' alt='phone'/>
        </a>
      </div>
    </FooterContainer>
  );
}