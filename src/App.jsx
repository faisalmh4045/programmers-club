import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    return (
        <Container className="poppins-regular">
            <Header></Header>
            <Main></Main>
        </Container>
    );
}

export default App;
