import React,{useState,useEffect} from 'react'
import Aheader from '../component/Aheader'
import Afooter from '../component/Afooter'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'


function Edit_cate() {

const redirect=useNavigate();

 const [formvalue,setFormvalue]=useState({

    id:"",
    Cat_Name:"",
    img:"",
 });

 useEffect(()=>{
fetch();

 },[]);

 const {id}=useParams();

const fetch= async()=>{
const res= await axios.get(`http://localhost:3000/categories/${id}`)
setFormvalue(res.data)
};
const ChangeHandle= (e)=>{
    setFormvalue({...formvalue,[e.target.name]:e.target.value})
};



function validation(){
    let res=true
    if (formvalue.Cat_Name==="") {
       res=false
       return false;   
    }
    if (formvalue.Cat_img  ==="") {
       res=false
       return false;   
    }
return res;
}
const SubmitHandele=async(e)=>{
    e.preventDefault();
     validation();
    const res= await axios.patch(`http://localhost:3000/categories/${id}`,formvalue)
    console.log(res.data);
    setFormvalue({...formvalue,id:"",Cat_Name:"",img:""});
    redirect('/Manage_categories')

};



  return (

    <>
    <Aheader/>
    <main id="main" class="main">
    
    <div class="pagetitle">
    <h2>Edit categaries</h2>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item">Edit</li>
             </ol>
      </nav>
    </div>
    
    <section class="section">
      <div class="row">
       
     
      <form action="" method="post" onSubmit={SubmitHandele}>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Cate id</label>
                                        <input type="text" value={formvalue.id} onChange={ChangeHandle} name="prod_name"  className="form-control" placeholder="Enter Product Name"  />
                                 
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Cat_Name:</label>
                                        <input type="text" value={formvalue.Cat_Name} onChange={ChangeHandle} name="Cat_Name"  className="form-control" placeholder="Enter Product Name"  />
                                    </div>
                                   
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="pwd" className="form-label">Image:</label>
                                        <input type="url" value={formvalue.img} onChange={ChangeHandle} name="img" className="form-control" placeholder="Enter Img url" />
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-5">Submit</button>
                                </form>


    

    
             
    
       
      </div>
    </section>
    
    </main>
    <Afooter/>  
    </>
  )
}

export default Edit_cate