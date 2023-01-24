import ReactDOMClient from "react-dom/client";
import { App } from "./view/App";
import { GlobalStyle } from "./styles/reset.styles";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);
