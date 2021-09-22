import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    width: 90%;
    ${'' /* padding: 1.6rem; */}
  }
  > *:nth-child(odd) {
    margin-left: auto;
    margin-right: 0;
  }
  > *:nth-child(even) {
    margin-left: 0;
    margin-right: auto;
  }
`;

export default function Gallery({children}) {
  return (
    <GalleryContainer>
      {children}
    </GalleryContainer>
  );
}