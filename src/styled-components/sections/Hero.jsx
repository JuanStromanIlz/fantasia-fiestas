import styled from 'styled-components';
import Button from '../Button';

const HeroContainer = styled.div`
  padding: 3.2rem 1.6rem;
  overflow: hidden;
  display: grid;
  gap: 2.4rem;
  .hero--text {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-size: 4rem;
      line-height: 5.3rem;
      margin-bottom: .6rem;
    }
    .description {
      margin-bottom: 1.6rem;
    }
    button {
      width: 100%;
    }
    .floatIcon {
      position: absolute;
      right: 1.6rem;
      top: 3.6rem;
      width: 25%;
      @keyframes float{0%,to{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}}
      animation: float 5s infinite;
    }
  }
  .hero--image {
    position: relative;
    img {
      display: block;
      object-fit: contain;
      margin: auto;
      border-radius: 5px;
    }
    .floatIcon {
      position: absolute;
      left: 1.6rem;
      top: 3.6rem;
      width: 25%;
      @keyframes float{0%,to{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}}
      animation: float 5s infinite;
    }
  }
  @media (min-width: 920px) {
    grid-template-columns: 48% 48%;
  }
`;

export default function Hero() {

  return (
    <HeroContainer>
      <div className='hero--text'>
        <img className='floatIcon' src='/imgs/icons/party.svg' alt='' />
        <h1 className='title'>Un salon magico para los mas chicos</h1>
        <p className='description'>Festejemos junto en un laberinto pelotero, juguemos, bailemos y cantemos.</p>
        <div className='callToAction'>
          <Button>CALCULEMOS EL PRECIO</Button>
        </div>
      </div>
      <div className='hero--image'>
        <img className='floatIcon' src='/imgs/icons/party.svg' alt='' />
        <img src='/imgs/salon.jpeg' width='100%' height='100%' alt='' />
      </div>
    </HeroContainer>
  );
}