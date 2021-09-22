import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ImageContainer = styled.div`
  max-width: 600px;
  position: relative;
  display: flex;
  background: grey;
  .image--src {
    transform: translateY(100%);
    opacity: 0;
    transition: all 1s cubic-bezier(0.65, 0.05, 0.36, 1);
    display: block;
    object-fit: contain;
    width: 100%;
  }
  .image__show {
    transform: translateY(0%);
    ${'' /* opacity: 1; */}
  }
  .image--icon {
    position: absolute;
    inset: ${props => props.inset};
    height: 90px;
    z-index: 1;
  }
`;

export default function Image({inset, image, icon}) {
  const [ref, inView, entry] = useInView({
    threshold: .8,
    triggerOnce: true
  });
  useEffect(()=> {
    function moveLogo() {
      if (inView && entry) {
        let icon = entry.target.getElementsByClassName('image--icon')[0];
        icon.style.transform= 'translateY(-' + window.scrollY / 8 + 'px)';
      }
    }
    document.addEventListener('scroll', moveLogo);
    return ()=> {
      document.removeEventListener('scroll', moveLogo);
    }
  }, [inView, entry]);

  return (
    <ImageContainer ref={ref} inset={inset}>
      <img className='image--icon' src={`/imgs/icons/${icon}`} alt='' />
      <img className={`image--src ${inView ? 'image__show' : ''}`} src={`/imgs/${image}`} alt='' />
    </ImageContainer>
  );
}