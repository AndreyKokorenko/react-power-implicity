import { Navbar } from "./components/Nav/Navbar";
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
