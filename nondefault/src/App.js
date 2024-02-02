// we can import using below line 
//import DefFun, { Fun, Fun1,Fun2,Fun3 } from "./Mycomp";
// or we can import using
import DefFun from "./Mycomp";
import { Fun } from "./Mycomp";
import { Fun1 } from "./Mycomp";
import { Fun2 } from "./Mycomp";
import { Fun3 } from "./Mycomp";

function App() {
  return (
    <>
    <Fun/>
    <Fun1/>
    <Fun2/>
    <Fun3/>
    <DefFun/>
    </>

  );
}

export default App;
