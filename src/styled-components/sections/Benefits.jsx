import styled from 'styled-components';
import InfoBoxes from '../InfoBoxes';
import SingleBox from '../SingleBox';
import Sub from '../Sub';
import Title from '../Title';

const BenefitsContainer = styled.section`
  .wrapper {
    margin: auto;
    max-width: 1200px;
    padding: 3.2rem 1.6rem;
      .benefits--header {
      text-align: center;
      .header--sub {
        color: ${props => props.theme.purple};
      }
    }
  }
`;

export default function Benefits() {
  return (
    <BenefitsContainer>
      <div className='wrapper'>
        <div className='benefits--header'>
          <Title>Nuestros paquete</Title>
          <Sub className='header--sub'>Todo lo necesario para que tu evento sea increible</Sub>
        </div>
        <InfoBoxes>
          <SingleBox>
            <img className='icon' src='/imgs/icons/dishes.svg' alt=''/>
            <h3 className='title'>Vajilla completa</h3>
            <p>Contamos con juegos de vajilla completos para adultos y niños para que no tengas que llevar nada desde tu casa.</p>
          </SingleBox>
          <SingleBox>
            <img className='icon' src='/imgs/icons/drinks.svg' alt=''/>
            <h3 className='title'>Atencion al publico</h3>
            <p>En todo momento vas a ser atendido por nosotros para que no falte nada en tu mesa ni en la de los niños.</p>
          </SingleBox>
          <SingleBox>
            <img className='icon' src='/imgs/icons/party.svg' alt=''/>
            <h3 className='title'>Todos los juegos</h3>
            <p>El precio del festejo incluye el <strong>tejo</strong> y el <strong>metegol</strong> por tiempo ilimitado, asi como la <strong>pista de baile</strong> para los mas chicos.</p>
          </SingleBox>
          <SingleBox>
            <img className='icon' src='/imgs/icons/tarjetas.svg' alt=''/>
            <h3 className='title'>Tarjetas de invitacion</h3>
            <p>Contas con tarjetas de invitacion para todos los invitados.</p>
          </SingleBox>
        </InfoBoxes>
      </div>
    </BenefitsContainer>
  );
}