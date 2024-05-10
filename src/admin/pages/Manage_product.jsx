import React,{useEffect,useState} from 'react'
import Afooter from '../component/Afooter'
import Aheader from '../component/Aheader'
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'


function Manage_product() {
  const redirect = useNavigate();
 const [data,setData]= useState([])

  useEffect(()=>{
   fetch();
  },[]);

 const fetch = async ()=>{
  const res=await axios.get(`http://localhost:3000/product`);
  setData(res.data);

 }
 const deleteHandel= async (id)=>{
  const res= await axios.delete(`http://localhost:3000/product/${id}`);
  fetch();
 }
 

  return (
    <>
    <Aheader/>
<main id="main" class="main">

<div class="pagetitle">
<h2>Add product</h2>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item">ADD</li>
         </ol>
  </nav>
</div>

<section class="section">
  <div class="row">
   
 
  <h2>Manage Product </h2>
                                <table className="table table-hover ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Cate ID</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
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
                                                        <td>{value.cate_id}</td>
                                                        <td>{value.prod_name}</td>
                                                        <td>{value.desc}</td>
                                                        <td>{value.price}</td>

                                                        <td><img src={value.img} width="50px" alt="" /></td>
                                                        <td>
                                                            <button className='btn btn-primary' onClick={()=>redirect('/Edit_pro/' + value.id)}>Edit</button>
                                                            <button className='btn btn-danger'  onClick={()=>deleteHandel(value.id)}>Delete</button>
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

export default Manage_product