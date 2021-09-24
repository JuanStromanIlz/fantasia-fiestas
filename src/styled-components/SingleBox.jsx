import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  .icon {
    display: block;
    margin-right: auto;
    margin-left: auto;
    height: 50px;
    object-fit: contain;
    @keyframes flip {
      0% {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
      }
      100% {
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
      }
    }
  }
  .icon__flip {
    animation: flip .5s 2 cubic-bezier(0.65, 0.05, 0.36, 1) alternate;
  }
  .title {
    margin-top: 1.6rem;
    font-size: 2.2rem;
    text-align: center;
  }
  p {
    text-align: center;
    margin-top: 1.6rem;
    line-height: 2.4rem;
  }
`;

export default function SingleBox({children}) {
  const [ref, inView, entry] = useInView({
    threshold: .5,
    triggerOnce: true
  });
  useEffect(()=> {
    if (inView && entry) {
      let icon = entry.target.getElementsByClassName('icon')[0];
      icon.classList.add('icon__flip');
    }
  },[inView, entry]);

  return (
    <BoxContainer ref={ref} className='info'>
      {children}
    </BoxContainer>
  );
}