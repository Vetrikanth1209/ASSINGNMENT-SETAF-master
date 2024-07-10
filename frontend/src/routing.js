import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import { Dharun } from "./dharun";
import Tdharun from "./tdharun";
import Tvisvak from "./tvisvak";
import Visvak from "./visvak";
import Vetri from "./vetri";
import Tvetri from "./tvetri";
import Selva from "./selva";
import Tselva from "./tselva";
import Moule from "./moule";
import Tmoule from "./tmoule";
import Cardview from "./cardview";


const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" Component={() => <Home />} />
        <Route path="/home" Component={() => <Home />} />
        <Route path="/dharun" Component={() => <Dharun/>} />
        <Route path="/tdharun" Component={() => <Tdharun/>} />
        <Route path="/vetri" Component={() => <Vetri/>} />
        <Route path="/tvetri" Component={() => <Tvetri/>} />
        <Route path="/visvak" Component={() => <Visvak/>} />
        <Route path="/tvisvak" Component={() => <Tvisvak/>} />
        <Route path="/selva" Component={() => <Selva/>} />
        <Route path="/tselva" Component={() => <Tselva/>} />
        <Route path="/moule" Component={() => <Moule/>} />
        <Route path="/tmoule" Component={() => <Tmoule/>} />
        <Route path="/cardview" Component={() => <Cardview/>} />
        

        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;