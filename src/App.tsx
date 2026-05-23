import { Card } from "./components/Card";

function App() {
  return (
    <div className="flex gap-3 m-5">
      <Card
        type="video"
        tags={[
          "VJHCVGC",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
        ]}
        link="https://youtu.be/M5OCLifZK1w?list=RDM5OCLifZK1w"
        topHeading="New Song"
      />
      <Card
        type="tweet"
        tags={[
          "VJHCVGC",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
          "ideas",
        ]}
        link="https://x.com/VikrantPareek_/status/2037014368416829596?s=20"
        topHeading="New Song"
      />
    </div>
  );
}

export default App;
