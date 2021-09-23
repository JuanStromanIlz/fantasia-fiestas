import { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Sub from '../Sub';
import Title from '../Title';

const GalleryContainer = styled.div`
  background: ${props => props.theme.green};
  position: relative;
  overflow: hidden;
  .gallery--float {
    position: absolute;
    width: 100px;
  }
  .wrapper {
    padding: 3.2rem 1.6rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    .gallery--title {
      color: ${props => props.theme.purple};
      color: white;
    }
    .gallery--imgs {
      height: 200vh;
    }
  }
`;

export default function Gallery() {
  const [ref, inView, entry] = useInView();

  useEffect(()=> {
    function moveIcons() {
      if (inView && entry) {
        let icons = entry.target.getElementsByClassName('gallery--float');
        for (let i = 0; i < icons.length; i++) {
          const element = icons[i];
          element.style.transform= 'translateY(' + window.scrollY + 'px)';
        }
        // let stars = entry.target.getElementById('stars');
        // let balloons = entry.target.getElementById('balloons');
        // let cake = entry.target.getElementById('cake');

        // stars.style.transform= 'translateY(-' + window.scrollY / 6 + 'px)';
        // balloons.style.transform= 'translateY(-' + window.scrollY / 6 + 'px)';
        // cake.style.transform= 'translateY(' + window.scrollY / 8 + 'px)';
      }
    }
    document.addEventListener('scroll', moveIcons, {passive: true});
    return ()=> {
      document.removeEventListener('scroll', moveIcons);
    }
  }, [inView, entry]);

  return (
    <GalleryContainer ref={ref}>
      <div className='wrapper'>
        <img id='stars' className='gallery--float' src='/imgs/icons/gallery/stars.svg' alt=''/>
        <img id='cake' className='gallery--float' src='/imgs/icons/gallery/cake.svg' alt=''/>
        <img id='balloons' className='gallery--float' src='/imgs/icons/gallery/balloons.svg' alt=''/>
        <Title className='gallery--title'>Nuestro Salon</Title>
        <Sub>Conoce nuestras instalaciones</Sub>
        <div className='gallery--imgs'></div>
      </div>
    </GalleryContainer>
  );
}