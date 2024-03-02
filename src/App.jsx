// import Modal from "./components/Modal"
import Header from "./components/Header";
import AddAddressForm from "./components/AddAddressForm";
import { reducer, initialState } from "./reducers/addressReducer";
import { useReducer } from "react";
import AddressList from "./components/AddressList";
// import EditAddressForm from "./components/EditAddressForm";

function App() {
  const [{ address, status }, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Header dispatch={dispatch} />
      {status === "add" && <AddAddressForm dispatch={dispatch} />}
      <AddressList address={address} dispatch={dispatch} status={status} />
    </div>
  );
}

export default App;
