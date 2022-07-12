import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://janischan-portfolio-jc.netlify.app" target="_blank">
            Janis Chan
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Janisgee/application-weather-react"
            target="_blank"
          >
            open-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
