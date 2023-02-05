import { Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import EmptyCard from "./components/EmptyCard/EmptyCard.jsx";
import Layout from "./components/Layout/Layout.jsx";

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<EmptyCard />} />
          <Route path='/card/:holiday' element={<Card />} />
        </Route>
        <Route path='theCard/:idText/:idImg' element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
