import { useSelector } from "react-redux";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const isTyped = useSelector((state) => state.contentPage.isTyped);

  return <div>{isTyped ? <SecondPage /> : <FirstPage />} </div>;
}

export default App;
