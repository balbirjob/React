import Learn from "./Mycomponent";

function App() {
  const sub1 = "java";
  const sub2 = "python";
  const sub3 = "sql";
  const sub4 = "react";

  return (
    <>
    <h1>Props example 2nd </h1>
    <Learn subject = {sub1}/>
    <Learn subject = {sub2}/>
    <Learn subject = {sub3}/>
    <Learn subject = {sub4}/>
    </>
  );
}

export default App;
