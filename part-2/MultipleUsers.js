const MultipleUsers = (props) => {
  console.log(props)

  // let username = users.map(u => { return <h2>{u.username}</h2>});
  // let name = users.map(u => { return <li>{u.name}</li>});
  // let date = users.map(u => { return <span>{u.date}</span>});
  // let message = users.map(u => {return <p>{u.message}</p>});

  // it does not work if it is props.user.map???

  return (
    users.map(u => 
    <div>
      <blockquote>
        <h2>Message from Username: {u.username}</h2>
        <p>
          <span>On {u.date}, {u.name} said: </span>
        </p>
        <p>{u.message}</p>
    </blockquote>
    </div>
  ));
}
