
import  axios  from 'axios';
import React, { useEffect } from 'react'

export default function About() {
    const[data,setData]=React.useState([]);
    useEffect(()=>{
        axios.get("https://akashsir.in/myapi/atecom1/api/api-subcategory-list.php")
        .then(res=>{
            console.log(res.data.sub_category_list);
            setData(res.data.sub_category_list);
        })
    })
  return (
    <div>
      <h1>about</h1>
      <table border={1}>
        <tr>
            <th>id</th>
            <th>category name</th>
            <th>sub category id</th>
            
        </tr>
     
      {data.map((v,i)=>{
        return(
            <>
            {v.category_id}
            {v.category_name}
            {v.sub_category_id}
            <img src={v.sub_category_image}/>
            {v.sub_category_name}
            </>
        )
      })}
       </table>
    </div>
  )
}
