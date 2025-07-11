import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="App-header">
      <Main />
      {showModal && <SideBar toggleModal={toggleModal} />}
      <Footer toggleModal={toggleModal} />
    </div>
  );
}

export default App;
