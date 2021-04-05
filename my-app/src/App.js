import Todo from "./component/Todo";


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' butn='Add' />
      <Todo text='master React' butn='Change' />
      <Todo text='Explore React Course' butn='Delete' />

    </div>
  );
}

export default App;
