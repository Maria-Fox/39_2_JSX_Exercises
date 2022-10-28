function SolApp() {
  return (
    <div>
      <Tweet
        name="Ted"
        username="Teddy_westside"
        date={new Date().toDateString()}
        message="Fun fact about the Arcadian..."
      />
      <Tweet
        name="Marshall"
        username="Vanilla_Thunder"
        date={new Date().toDateString()}
        message="#Lawyered"
      />
      <Tweet
        name="Barney"
        username="Legend-wait-4-it..."
        date={new Date().toDateString()}
        message="Dary!"
      />
    </div>
  );
}