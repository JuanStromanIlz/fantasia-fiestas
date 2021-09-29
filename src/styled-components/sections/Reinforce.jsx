import styled from 'styled-components';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ReinforceC = styled.div`
  background: ${props => props.theme.purple};
  overflow: hidden;
  .wrapper {
    margin: auto;
    max-width: 1200px;
    padding: 3.2rem 1.6rem;
    color: white;
    position: relative;
    .floatImg__up {
      position: absolute;
      bottom: 3.2rem;
      left: -3.2rem;
      opacity: .2;
      width: 250px;
      pointer-events: none;
    }
    .floatImg__down {
      position: absolute;
      top: 3.2rem;
      right: -1.6rem;
      opacity: .2;
      width: 150px;
      pointer-events: none;
    }
    h1 {
      text-align: center;
    }
  }
`;

export default function Reinforce() {
  const [ref, inView, entry] = useInView();

  useEffect(()=> {
    function moveLogo() {
      if (inView && entry) {
        let iconUp = entry.target.getElementsByClassName('floatImg__up')[0];
        iconUp.style.transform= 'translateY(-' + window.scrollY / 6 + 'px)';
        let iconDown = entry.target.getElementsByClassName('floatImg__down')[0];
        iconDown.style.transform= 'translateY(' + window.scrollY / 8 + 'px)';
      }
    }
    document.addEventListener('scroll', moveLogo, {passive: true});
    return ()=> {
      document.removeEventListener('scroll', moveLogo);
    }
  }, [inView, entry]);

  return (
    <ReinforceC ref={ref}>
      <div className='wrapper'>
        <img className='floatImg__up' src='/imgs/icons/white/balloons.svg' alt=''/>
        <img className='floatImg__down' src='/imgs/icons/white/stars.svg' alt=''/>
        <h1>Aca volvemos a mostrar por que somos un buen salon con alguna frase</h1>
      </div>
    </ReinforceC>
  );
}