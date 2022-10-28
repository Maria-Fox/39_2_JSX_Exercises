const App = () => {
  return (
    <div>
      <Tweet username = "James_B" name = "James" date = "Oct 27, 2022" message = "This is fun!"/> 
      <MultipleUsers {...[users]}/>
      <SolApp />
      <JokesMap />

    </div>
  )
}

let users = [{
  "username": "Ross_G",
  "name" : "Ross",
  "date" : "10/27/2022",
  "message" : "Dinosaur stuff."
},{
  "username": "Rachel_G",
  "name" : "James",
  "date" : "10/27/2022",
  "message" : "Fashion stuff."
},{
  "username": "Monica_G",
  "name" : "Monica",
  "date" : "10/27/2022",
  "message" : "Too busy doing some manic cleaning to chat rn."
}
]



ReactDOM.render(<App />, document.getElementById("root"));