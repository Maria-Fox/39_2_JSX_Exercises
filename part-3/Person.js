const Person = ({name, age, hobbies}) => {
  let UserHobbies  = hobbies.map(hobby => <li>{hobby}</li>)

  return (
    <div>
      <p>Learn more information about this person:</p>
      <h1>{name}</h1>
      {/* the length is one greater than index. */}
      <h2>{name.length < 7 ? name : name.slice(0,5)}</h2>
      <h3> {age > 18 ? "Please go vote!" : "You must be 18."}</h3>
      <ul >
        {UserHobbies}
      </ul>
    </div>
  )
}