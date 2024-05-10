import React,{useState,useEffect} from 'react'
import Afooter from '../component/Afooter'
import Aheader from '../component/Aheader'
import axios from 'axios'

function Manage_user() {
   
const[data,setData]=useState([])

useEffect(()=>{
  fetch();

},[]);

const fetch=async()=>{
 const res=await axios.get(`http://localhost:3000/user2`);
 console.log("api data recive");
 console.log(res.data)
 setData(res.data);

};
const deleteHandel= async(id)=>{
 const res= await axios.delete(`http://localhost:3000/user2/${id}`);
 fetch();
}

  return (
    <>
      <Aheader />
      <main id="main" class="main">
        <div class="pagetitle">
          <h2>Manage_user</h2>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Manage</li>
            </ol>
          </nav>
        </div>

        <section class="section">
          <div class="row">
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
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
                                                        <td>{value.name}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.mobile}</td>
                                                        <td><img src={value.img} width="50px" alt="" /></td>
                                                        <td>
                                                            <button className='btn btn-primary'>Edit</button>
                                                            <button className='btn btn-danger'  onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                            <button className='btn btn-success'>{value.status}</button>
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
      <Afooter />
    </>
  );
}

export default Manage_user