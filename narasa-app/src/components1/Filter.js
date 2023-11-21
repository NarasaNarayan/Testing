import React, { useState } from 'react'
import Data from './Data'


const Filter = () => {
    

    const [search, setsearch] = useState()
    console.log("jiij");
    console.log(typeof Data);
    console.log(Data);
    console.log("jiij");
    



  return (
    <div>
        <h1>search city</h1>
        <center>        <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)}/>
        {Data.filter(data=>(data.name.toLowerCase().includes(search))).map(data=> {
            return (
        <li key={data.id} > {data.name}</li>)}

            ) 

        }
</center>
 </div>
  )
}

export default Filter