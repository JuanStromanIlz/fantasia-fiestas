import { ThemeProvider } from "styled-components";
import Benefits from "./styled-components/sections/Benefits";
import Footer from "./styled-components/sections/Footer";
import { GlobalStyles, theme } from "./styled-components/GlobalStyles";
import PriceCalculator from "./styled-components/sections/PriceCalculator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Benefits />
      <PriceCalculator />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
