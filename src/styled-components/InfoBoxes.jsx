import styled from 'styled-components';

const InfoBoxes = styled.div`
  display: grid;
  grid-template-columns: 1;
  .info {
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    .icon {
      display: block;
      margin-right: auto;
      margin-left: auto;
      width: 4.8rem;
      object-fit: contain;
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
  }
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