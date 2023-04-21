import { useEffect, useState } from "react";
import "./App.scss"

import { Home } from "./Home";
import { Loading } from "./Loading";
import { NewHome } from "./NewHome";


function App() {
  const [state,setState] = useState("");
  useEffect(()=>{
    setState(false);
    setTimeout(() => {
      console.log("loading end");
      setState(true);
    }, 4700);
  },[])
  console.log(state);
    return(
      <div className="App">
        {/* <Loading /> */}
        {/* <Home /> */}
        {/* <NewHome /> */}

        {state ? <Home /> : <Loading /> }
    </div>
    )
}
export default App;
