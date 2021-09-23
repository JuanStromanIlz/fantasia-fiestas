import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sub from '../Sub';
import Title from '../Title';

const PCalculatorContainer = styled.div`
  background: ${props => props.theme.purple};
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3.6rem), 0 100%);
  padidng-bottom: 3.2rem;
  overflow: hidden;
  .curveTop {
    background: white;
    padding-top: 3.6rem;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3.6rem), 0 100%);
  }
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
    button, label {
      z-index: 1;
      cursor: pointer;
    }
    .price--header {
      margin: 0 auto;
      text-align: center;
    }
    .price--form {
      max-width: 700px;
      margin: 0 auto;
      .optionContainer {
        display: flex;
        flex-direction: column;
        margin-bottom: 2.4rem;
        text-align: center;
        .option--number {
          display: flex;
          border: 2px solid white;
          padding: .8rem;
          border-radius: 25px;
          aspect-ratio: 1;
          width: 4rem;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1.6rem;
          span {
            font-size: 1.7rem;
            margin: auto;
          }
        }
        .option--title {
          margin-bottom: .8rem;
          font-size: 2rem;
        }
      }
      .optionContainer__day {
        .dayOptions {
          display: flex;
          flex-direction: row;
          gap: .8rem;
          .dayButton {
            display: flex;
            flex-direction: column;
            width: 50%;
            label {
              display: flex;
              width: 100%;
              margin-bottom: .8rem;
              .day--button {
                line-height: 40px;
                padding: .3rem 2.4rem;
                text-align: center;
                font-weight: bold;
                width: 100%;
                border: 2px solid white;
                border-radius: 25px;
                transition: all .3s cubic-bezier(0.65, 0.05, 0.36, 1);
              }
              .day--button__show {
                background: ${props => props.theme.green};
                color: ${props => props.theme.purple};
              }
              input {
                display: none;
              }
            }
            .day--price {
              color: ${props => props.theme.green};
              text-align: center;
            }
          }
        }
      }
      .optionContainer__extraTime {
        .extraTime--price {
          margin-bottom: .8rem;
          > * {
            display: inline;
            margin-left: .4rem;
            color: ${props => props.theme.green};
          }
        }
        .extraTimeOptions {
          display: flex;
          flex-direction: column;
          .buttons {
            display: flex;
            flex-direction: row;
            margin-top: 1rem;
            margin-left: auto;
            margin-right: auto;
            gap: .8rem;
            .timeShow {
              color: ${props => props.theme.green};
              margin: auto;
            }
            button {
              background: white;
              border: 2px solid white;
              padding: .8rem;
              border-radius: 25px;
              transition: all .3s cubic-bezier(0.65, 0.05, 0.36, 1);
              img {
                display: block;
                margin: auto;
                height: 17px;
              }
            }
          }
        }
      }
      .finalPrice {
        text-align: center;
        font-size: 2.2rem;
        display: block;
        .finalPrice--number {
          font-size: 3rem;
          color: ${props => props.theme.green};
        }
      }
      .contact {
        margin-top: 2.4rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        h3 {
          font-size: 2.4rem;
          margin-bottom: .8rem;
        }
        a {
          margin-top: 1.6rem;
          img {
            display: block;
            width: 40px;
            margin: 0 auto;
            animation: shake 3s ease infinite;
            @keyframes shake {
              25% {
                transform: translate3d(2px, 0, 0);
              }
              0%, 10%, 20% {
                transform: translate3d(-4px, 0, 0);
              }
              5%, 15% {
                transform: translate3d(4px, 0, 0);
              }
              30% {
                transform: translate3d(0,0,0);
              }
            }
          }
        }
      }
    }
  }
  @media (hover: hover) {
    .extraTimeOptions button:hover {
      background: ${props => props.theme.green} !important;
    }
    .contact a:hover img {
      animation-play-state: paused !important;
    }
  }
  @media (min-width: 920px) {
    .wrapper {
      .floatImg__up {
        width: 500px;
      }
      .floatImg__down {
        width: 300px;
      }
    }
  }
`;

export default function PriceCalculator() {
  let week = process.env.REACT_APP_SEMANA;
  let weekend = process.env.REACT_APP_FINDE;
  const [dayEvent, setDayEvent] = useState(week);
  const [ref, inView, entry] = useInView();
  /* Create a new Date and set time to 0 */
  const [extraTime, setExtraTime] = useState(new Date().setHours(0,0,0));
  const [finalPrice, setFinalPrice] = useState(week);

  /* Select the day of event */ 
  function daySelect(day) {
    /* parse the date to workout */
    let currentDate = new Date(extraTime);
    setDayEvent(day);
    calculateFinalPrice(currentDate.getHours(), currentDate.getMinutes(), day);
  }

  /* Extra time functions */
  function timeRest() {
    /* parse the date to workout */
    let currentDate = new Date(extraTime);
    if (currentDate.getMinutes() > 0 || currentDate.getHours() > 0) {
      setExtraTime(currentDate.setMinutes(currentDate.getMinutes() - 30));
    }
    calculateFinalPrice(currentDate.getHours(), currentDate.getMinutes());
  }
  function timeAdd() {
    /* parse the date to workout */
    let currentDate = new Date(extraTime);
    if (currentDate.getHours() < 8) {
      setExtraTime(currentDate.setMinutes(currentDate.getMinutes() + 30));
    }
    calculateFinalPrice(currentDate.getHours(), currentDate.getMinutes());
  }

  /* Calculate final price */
  function calculateFinalPrice(hours, minutes, day) {
    let priceBy30Minutes = 0;
    let price = 0;
    /* check if day has changed and send via params, else get value from state */
    if (day === undefined) {
      price = dayEvent;
      priceBy30Minutes = dayEvent / 4; 
    } else {
      price = day;
      priceBy30Minutes = day / 4;
    }
    let hoursAdded = priceBy30Minutes * hours * 2;
    let minutesAdded = 0;
    if (minutes === 30) {
      minutesAdded = priceBy30Minutes;
    }
    /* Calculate the final price by adding extra time * price */
    /* parce to number so it doesn't concatenate instead of sum */
    setFinalPrice(parseInt(price) + parseInt(hoursAdded) + parseInt(minutesAdded));
  }

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
    <PCalculatorContainer ref={ref}>
      <div className='curveTop'></div>
      <div className='wrapper'>
        <img className='floatImg__up' src='/imgs/icons/white/splash.svg' alt=''/>
        <img className='floatImg__down' src='/imgs/icons/white/shake.svg' alt=''/>
        <div className='price--header'>
          <Title>Calcula tu fiesta ideal</Title>
          <Sub>Aca vas a poder calcular el precio antes de comunircarte con nosotros</Sub>
        </div>
        <div className='price--form'>
          <div className='optionContainer optionContainer__day'>
            <div className='option--number'><span>1</span></div>
            <span className='option--title'>¿Es un día de semana o un finde / feriado?</span>
            <div className='dayOptions'>
              <div className='dayButton'>
                <label>
                  <input 
                    type='checkbox' 
                    name='dayEvent'
                    checked={dayEvent === week}
                    onChange={()=> daySelect(week)}
                  />
                  <span className={`day--button ${dayEvent === week ? 'day--button__show' : null}`}>dia de semana</span>
                </label>
                <h4 className='day--price'>${week}</h4>
              </div>
              <div className='dayButton'>
                <label>
                  <span className={`day--button ${dayEvent === weekend ? 'day--button__show' : null}`}>finde / feriado</span>
                  <input 
                    type='checkbox' 
                    name='dayEvent'
                    checked={dayEvent === weekend}
                    onChange={()=> daySelect(weekend)}
                  />
                </label>
                <h4 className='day--price'>${weekend}</h4>
              </div>
            </div>
          </div>
          <div className='optionContainer optionContainer__extraTime'>
          <div className='option--number'><span>2</span></div>
            <span className='option--title'>¿Queres agregar horario excedente?</span>
            <span className='extraTime--price'>30 minutos: <h4>${dayEvent / 4}</h4></span>
            <div className='extraTimeOptions'>
              <div className='buttons'>
                <button onClick={timeRest}>
                  <img src='/imgs/icons/rest.svg' alt='-'/>
                </button>
                <span className='timeShow'>+ {new Date(extraTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} hrs</span>
                <button onClick={timeAdd}>
                  <img src='/imgs/icons/add.svg' alt='+'/>
                </button>
              </div>
            </div>
          </div>
          <span className='finalPrice'>Tu presupuesto final: <span className='finalPrice--number'>${finalPrice}</span></span>
          <div className='contact'>
            <h3>¡Wow, fantastico!</h3>
            <span>¿Y si nos ponemos en contacto via Whatsapp y reservamos esa fecha especial?</span>
            <a href={`https://wa.me/${process.env.REACT_APP_PHONE}?text=Hola%2C%20como%20est%C3%A1s%3F%20Quisiera%20reservar%20una%20fecha%20en%20el%20salon%21`}>
              <img src='/imgs/icons/wppLogo.png' alt='whatsapp' />
            </a>
          </div>
        </div>
      </div>
    </PCalculatorContainer>
  );
}