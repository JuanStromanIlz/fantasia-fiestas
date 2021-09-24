import { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Sub from '../Sub';
import Title from '../Title';

const GalleryContainer = styled.div`
  background: ${props => props.theme.purple};
  background-image: linear-gradient(0deg, ${props => props.theme.pink} 30%, ${props => props.theme.purple} 100%);
  color: white;
  overflow: hidden;
  .wrapper {
    margin: auto;
    max-width: 1200px;
    padding: 3.2rem 1.6rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    .gallery--float {
      position: absolute;
      pointer-events: none;
      opacity: .2;
    }
    .stars {
      bottom: 3.2rem;
      left: -3.2rem;
      width: 250px;
    }
    .cake {
      top: 3.2rem;
      right: -1.6rem;
      width: 150px;
    }
    .balloons {
      left: -3.2rem;
      top: 3.2rem;
      width: 300px;
    }
    .gallery--imgs {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(auto, 400px));
      gap: 1.6rem;
      @keyframes float-5{0%,to{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}}
      .img--frame {
        margin: auto;
        height: fit-content;
          img {
          display: block;
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
  @media (min-width: 920px) {
    .wrapper {
      #star {
        width: 500px;
      }
      #cake {
        width: 300px;
      }
    }
  }
`;

export default function Gallery() {
  const [ref, inView, entry] = useInView();

  useEffect(()=> {
    function moveIcons() {
      if (inView && entry) {
        let stars = entry.target.getElementsByClassName('stars')[0];
        stars.style.transform= 'translateY(-' + window.scrollY / 6 + 'px)';
        let cake = entry.target.getElementsByClassName('cake')[0];
        cake.style.transform= 'translateY(' + window.scrollY / 8 + 'px)';
        let balloons = entry.target.getElementsByClassName('balloons')[0];
        balloons.style.transform= 'translateY(' + window.scrollY / 8 + 'px)';
      }
    }
    // document.addEventListener('scroll', moveIcons, {passive: true});
    return ()=> {
      document.removeEventListener('scroll', moveIcons);
    }
  }, [inView, entry]);

  return (
    <GalleryContainer ref={ref}>
      <div className='wrapper'>
        {/* <img className='stars gallery--float' src='/imgs/icons/white/stars.svg' alt='' />
        <img className='cake gallery--float' src='/imgs/icons/white/cake.svg' alt=''/>
        <img className='balloons gallery--float' src='/imgs/icons/white/balloons.svg' alt=''/> */}
        <Title className='gallery--title'>Nuestro Salon</Title>
        <Sub>Conoce nuestras instalaciones</Sub>
        <div className='gallery--imgs'>
          <div className='img--frame'>
            <img src='/imgs/salon.jpeg' alt='' />
          </div>
          <div className='img--frame'>
            <img src='/imgs/salon1.jpeg' alt='' />
          </div>
        </div>
      </div>
    </GalleryContainer>
  );
}