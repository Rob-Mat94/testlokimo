import DynamicMap from './components/DynamicMap/DynamicMap';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import RootObject from './model/interfaces';
import List from './components/List/List';
import json from "./data/data.json"

function App() {
  // Vue 
  const [viewState, setViewState] = useState(0);
  // données initiales
  const data_set: RootObject[] = JSON.parse(JSON.stringify(json))
  // données courantes
  const [data, setData] = useState<RootObject[]>(data_set)

  return (<>
    <Navbar viewState={viewState} setViewState={setViewState} data={data} setData={setData} original_data={data_set}/> 
    {viewState == 0 ? <List data={data}/> : <DynamicMap data={data}/> }
  </>)


}


export default App;
 