import { useEffect } from 'react';
import styled from 'styled-components';
import Sub from '../Sub';

const HeroContainer = styled.div`
  padding: 3.2rem 1.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 4rem;
    line-height: 5.3rem;
    color: ${props => props.theme.purple};
  }
  #heroImg {
    transition: all linear .5s;
    width: 20%;
    max-width: 300px;
  }
  @media (min-width: 920px) {
    h1 {
      font-size: 5.2rem;
      line-height: 6.6rem;
    }
  }
`;

export default function Hero() {
  useEffect(()=> {
    // function imageSize() {
    //   let heroImg = document.getElementById('heroImg');
    //   heroImg.style.transform=`scale(${window.scrollY / (window.innerWidth / 2)})`;
    // }
    // document.addEventListener('scroll', imageSize);
    // return ()=> {
    //   document.removeEventListener('scroll', imageSize);
    // }
  }, []);

  return (
    <HeroContainer>
      <h1>La mejor opcion para un festejo ideal</h1>
      <Sub>Un salon magico para los mas peques</Sub>
    </HeroContainer>
  );
}