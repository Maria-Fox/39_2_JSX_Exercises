const Tweet = ({username, name, date, message}) => {
  return (
    <blockquote>
      <h2>Message from Username: {username}</h2>
      <p>
        <span>On {date}, {name} said: </span>
      </p>
      <p>{message}</p>
    </blockquote>
  );
}
