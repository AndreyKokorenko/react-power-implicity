import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Slider />
    </div>
  );
};
