import { useEffect, useState } from "react";
import "./App.css";
import Navigator from "./routes";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Loader from "./components/loader/Loader";


function App() {
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
      setTimeout(()=>{
           setLoader(!loader)
      }, 2500)
  }, [])
  return (
    <>
      {loader ? <Loader/>: <Navigator />}
      <TawkMessengerReact propertyId="655e868891e5c13bb5b2df86" widgetId="1hfsjr2an" />
    </>
  );
}

export default App;
