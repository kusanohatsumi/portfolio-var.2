import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { Main } from "./main/Main";
import { Work } from "./components/work/Work";
import { Works } from "./components/work/Works";

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    setState(false);
    setTimeout(() => {
      console.log("loading end");
      setState(true);
    }, 4700);
  }, []);
  console.log(state);
  return (
    <>
      {/* <Header /> */}
      <main className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<Works />} />
          <Route path="/works/:itemId" element={<Work />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
}
export default App;
