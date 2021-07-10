import "./App.css";
import { UserProvider } from "../contexts/User";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { MyButton } from "../components/MyButton/MyButton";

function App() {
  return (
    <UserProvider>
      <Header />
      <Main />
      <MyButton />
    </UserProvider>
  );
}

export default App;
