const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name = "Maya"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"))