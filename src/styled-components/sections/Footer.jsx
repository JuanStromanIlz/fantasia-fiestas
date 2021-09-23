import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 3.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  .curve {
    ${'' /* background: ${props => props.theme.purple};
    height: 100px;
    clip-path: ellipse(252% 100% at 213.62% 0%); */}
  }
  .date {
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
  }
  .media {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .callToMedia {
      font-weight: bold;
      color: ${props => props.theme.purple};
      text-align: center;
      margin-bottom: 2.4rem;
    }
    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      a {
        width: 30px;
        img {
          display: block;
          margin: auto;
          object-fit: contain;
          width: 100%;
        }
      }
    }
  }
  .devInfo {
    text-align: center;
    font-size: 1.5rem;
    color: grey;
    a {
      color: ${props => props.theme.purple};
    }
  }
  @media (hover: hover) {
    .media .icons a:hover {
      transform: scale(1.1);
    }
  }
  @media (min-width: 920px) {
    .media {
      width: 700px;
      margin: 0 auto;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className='curve'></div>
      <div className='media'>
        <span className='callToMedia'>No dejes de comunicarte con nosotros.</span>
        <div className='icons'>
          <a href='/'><img src='/imgs/media/whatsapp.svg' alt='Whatsapp' /></a>
          <a href='/'><img src='/imgs/media/instagram.svg' alt='Instagram' /></a>
          <a href='/'><img src='/imgs/media/facebook.svg' alt='Facebook' /></a>
          <a href='/'><img src='/imgs/media/map.svg' alt='GoogleMaps' /></a>
        </div>
      </div>
      <div className='date'>
        <span>{new Date().getFullYear()} Fantasia Fiestas, Coronel Suarez.</span>
      </div>
      <div className='devInfo'>
        <span>Made by <a href='/'>jstromanilz</a></span>
      </div>
    </FooterContainer>
  );
}