import Body from "./components/Body/Body";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Rooms from "./components/Rooms/Rooms";
import Value from "./components/Value/Value";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Body />
      </div>
      <Rooms/>
      <Value/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
