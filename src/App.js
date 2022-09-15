import "./App.css";
import Expense from "./components/Expense";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <ExpenseForm />
      <Expense />
    </div>
  );
}

export default App;
