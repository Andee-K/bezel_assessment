import { useEffect, useState } from "react";
import "./App.css"
import ModalCard from "./components/ModalCard";
import Axios from "axios";


const App = () => {
  return (
    <div>
        <div className="modal">
          <ModalCard/>
        </div>
    </div>
  );
};

export default App;

