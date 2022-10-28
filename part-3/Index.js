const App = () => {
  return (
    <div>
      <Person age = {21} name = "ThisisLongerThan8" hobbies = {["dancing", "hanging out"]}/>
      <Person age = {18} name = "Shorty" hobbies = {["dancing", "crying"]}/>
      <Person age = {6} name = "Invested" hobbies = {["laughing", "crying"]}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));