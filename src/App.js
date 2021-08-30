import React, {useState, useEffect} from "react";
import DataTable from '../src/components/DataTable'
require("es6-promise").polyfill()
require("isomorphic-fetch")

function App() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>res.json())
            .then((json)=>setData(json))
    },[])
    function search(rows){
        const columns = rows[0] && Object.keys(rows[0])
        return rows.filter((row)=>columns.some((column)=>row[column].toString().toLowerCase().indexOf(query.toString())>-1))
    }


  return (
    <div className="App">
       <div>
           <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
       </div>
       <div><DataTable data={search(data)}/></div>
    </div>
  );
}

export default App;
