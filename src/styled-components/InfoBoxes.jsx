import styled from 'styled-components';

const InfoBoxes = styled.div`
  display: grid;
  grid-template-columns: 1;
  @media (min-width: 450px) {
    grid-template-columns: repeat(2, calc(100% / 2));
    .info:nth-child(2) {
      padding-left: 1.6rem;
    }
    .info:nth-child(4) {
      padding-left: 1.6rem;
    }
  }
  @media (min-width: 920px) {
    grid-template-columns: repeat(4, calc(100% / 4));
    .info:nth-child(3) {
      padding-left: 1.6rem;
    }
  }
`;

export default InfoBoxes;