import { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Sub from '../Sub';
import Title from '../Title';

const ImageContainer = styled.div`
  img {
    @keyframes float-5{0%,to{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}}
    opacity: 0;
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
    object-fit: contain;
    border-radius: 5px;
    transition: all .8s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  .show {
    opacity: 1;
    ${'' /* animation: float-5 2s infinite; */}
  }
`;

const Image = ({url})=> {
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  return (
    <ImageContainer ref={ref}>
      <img className={inView ? 'show' : null} src={url} alt='' />
    </ImageContainer>
  );
};

const GalleryContainer = styled.div`
  .wrapper {
    margin: auto;
    max-width: 1200px;
    padding: 3.2rem 1.6rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    .gallery--header {
      margin: 0 auto;
      text-align: center;
    }
    .gallery--imgs {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      gap: 1.6rem;
    }
  }
  @media (min-width: 920px) {
    .wrapper {
      .gallery--imgs {
        grid-template-columns: repeat(3, auto);
      }
    }
  }
`;

export default function Gallery() {

  return (
    <GalleryContainer>
      <div className='wrapper'>
        <div className='gallery--header'>
          <Title>Conoce nuestro salon</Title>
          <Sub>Todos los espacios para ellos</Sub>
        </div>
        <div className='gallery--imgs'>
          <Image url='/imgs/salon.jpeg' />
          <Image url='/imgs/salon.jpeg' />
          <Image url='/imgs/salon.jpeg' />
        </div>
      </div>
    </GalleryContainer>
  );
}