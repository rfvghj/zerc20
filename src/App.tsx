import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Main } from "@/component/main";
import Home from "./pages/home/index";
import { LocaleProvider } from "@douyinfe/semi-ui";
import en_US from "@douyinfe/semi-ui/lib/es/locale/source/en_US";

function App() {
  return (
    <LocaleProvider locale={en_US}>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </Main>
      </BrowserRouter>
    </LocaleProvider>
  );
}

export default App;
