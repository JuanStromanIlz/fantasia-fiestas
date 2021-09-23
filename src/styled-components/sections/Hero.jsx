import { useEffect } from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  padding: 3.2rem 1.6rem;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 4rem;
  }
  #heroImg {
    transition: all linear .5s;
    width: 20%;
    max-width: 300px;
  }
`;

export default function Hero() {
  useEffect(()=> {
    function imageSize() {
      let heroImg = document.getElementById('heroImg');
      heroImg.style.transform=`scale(${window.scrollY / (window.innerWidth / 2)})`;
    }
    document.addEventListener('scroll', imageSize);
    return ()=> {
      document.removeEventListener('scroll', imageSize);
    }
  }, []);

  return (
    <HeroContainer>
      <h1>La mejor opcion para un festejo ideal</h1>
      <h2>Un salon magico para los mas peques</h2>
      <img id='heroImg' src='/imgs/salon.jpeg' alt='' />
    </HeroContainer>
  );
}