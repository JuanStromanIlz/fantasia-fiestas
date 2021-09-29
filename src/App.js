import { ThemeProvider } from "styled-components";
import Benefits from "./styled-components/sections/Benefits";
import Footer from "./styled-components/sections/Footer";
import { GlobalStyles, theme } from "./styled-components/GlobalStyles";
import PriceCalculator from "./styled-components/sections/PriceCalculator";
import Gallery from "./styled-components/sections/Gallery";
import Hero from "./styled-components/sections/Hero";
import Reinforce from "./styled-components/sections/Reinforce";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <Reinforce />
      <Benefits />
      <Gallery />
      <PriceCalculator />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
