import './App.css';
import {useEffect} from "react";
import {useTelegram} from './hooks/useTelegram';
import Header from "./conponents/Header/Header";
import { Route, Routes} from "react-router-dom";
import ProductList from "./conponents/ProductList/ProductList";
import Form from "react-router-dom";

function App() {
  const { onToggleButton,tg} = useTelegram();

  useEffect(()=>{
    tg.ready()
  },[])



  return (
    <div className="App">
      <Header />
        <Routes>
            <Route index element={<ProductList/>}/>
            <Route path={'/form'} element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App;
