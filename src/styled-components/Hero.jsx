import styled from 'styled-components';
import Button from './Button';

const HeroContainer = styled.div`
  position: relative;
  img {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 300px;
    object-fit: cover;
    clip-path: ellipse(231% 100% at 120.59% 0%);
  }
  .heroContent {
    padding-top: 300px;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    .heroTitle {
      font-size: 4.8rem;
      line-height: 5.6rem;
    }
    .sub {
      margin-top: 1.6rem;
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 920px) {
    flex-direction: row;
    .heroTitle {
      font-size: 6.4rem;
      line-height: 7.2rem;
    }
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <img src='/imgs/salon.jpeg' alt='' />
      <div className='heroContent'>
        <h1 className='heroTitle'>Tenemos todo para hacer tu gran festejo</h1>
      </div>
    </HeroContainer>
  );
}