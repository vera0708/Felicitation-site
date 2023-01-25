import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { TextContextProvider } from "./context/textContextProvider";
import { ImgContextProvider } from "./context/imgContextProvider";
import { HolidaysContextProvider } from "./context/holidaysContext";

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const App = () => {
  return (
    <div style={wrapper}>
      <HolidaysContextProvider>
        <ImgContextProvider>
          <TextContextProvider>
            <Header />
            <Card />
            <Footer />
          </TextContextProvider>
        </ImgContextProvider>
      </HolidaysContextProvider>
    </div>
  );
}

export default App;
