import React, { useState,useEffect } from 'react'
import Afooter from '../component/Afooter'
import Aheader from '../component/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Manage_categories() {
    const redirect =useNavigate();

    const [data,setData]=useState([]);

useEffect(()=>{
   fetch();
},[]);

const fetch = async()=>{
    const res= await axios.get(`http://localhost:3000/categories`);
    console.log(res);
    setData(res.data);
    
};

const deleteHandel = async (id)=>{
    const res =await axios.delete(`http://localhost:3000/categories/${id}`);
    fetch();
}
  return (
    <>
    <Aheader/>
    <main id="main" class="main">
    
    <div class="pagetitle">
    <h2>Manage Categories</h2>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item">ADD</li>
             </ol>
      </nav>
    </div>
    
    <section class="section">
      <div class="row">
       
     
      <h2 className='mb-5'>Manage Categories </h2>

<table className="table table-hover ">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {
            data && data.map((value, index, arr) => {
                return (
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.Cat_Name}</td>
                        <td><img src={value.img} alt="" width="50px"/></td>
                        <td>
                            <button className='btn btn-primary' onClick={()=>redirect('/edit_cate/' + value.id)}>Edit</button>
                            <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }


    </tbody>
</table>

    
             
    
       
      </div>
    </section>
    
    </main>
    <Afooter/>   
       </>
           
            
  )
}

export default Manage_categories