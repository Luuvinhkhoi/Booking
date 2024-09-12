import React, {useState} from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './App.css';
import Main from '../Main/Main'
import { Detail } from '../Detail/Detail';
import { Root } from '../Root/Root';
import { SearchResult } from '../searchResult/searchResult';
function App() {
  const [state, setState] = useState()
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root></Root>}>
      <Route index element={<Main></Main>}></Route>
      <Route path='/home' element={<Main></Main>}></Route>
      <Route path='/search' element={<SearchResult></SearchResult>}></Route>
      <Route path='/:id' element={<Detail></Detail>}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
