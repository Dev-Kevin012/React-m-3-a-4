import "./App.css";
import Form from "./components/Form";
import Modal from "./components/Modal";
import UsersData from "./components/UsersData";

function App() {
  return (
    <main className="h-full w-full">
      <Form />
      <UsersData />
      <Modal />
    </main>
  );
}

export default App;
