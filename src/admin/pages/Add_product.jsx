import React from 'react'
import axios from 'axios'
import Afooter from '../component/Afooter'
import Aheader from '../component/Aheader'
import { useEffect, useState,useRef } from 'react'

function Add_product() {

  const inputRef = useRef(null);

const [data,SetData]=useState([]);

useEffect(()=>{
 fetch();
},[]);

const fetch = async ()=>{
  const res =await axios.get (`http://localhost:3000/categories`);
  SetData(res.data);
  
  
};

const [formvalue,setFormvalue]=useState(
{ id: "",
cate_id: "",
Cat_Name:"",
prod_name: "",
desc: "",
price: "",
img: ""
});


const ChangeHandle= (e)=>{
 
  setFormvalue({...formvalue,id:new Date().getTime().toString(),Cat_Name:inputRef.current.id,[e.target.name]:e.target.value,});
};

function Validation(){
  let res = true;
  if (formvalue.cate_id == "") {
      res = false;
      console.log('id')
      return false;
  }

  if(formvalue.prod_name == ""){
    res=false;
    console.log('name')
    return false;
  }
  if(formvalue.desc == ""){
    res=false;
    console.log('dec')
    return false;
  }
  if(formvalue.price == ""){
    res=false;
    return false;
    
  }
  if(formvalue.img == ""){
    res=false;
    return false;
  }
return res;

};


const SubmitHandele = async (e)=>{
  e.preventDefault();
  if(Validation()){

 //console.log(  "hello"  +inputRef.current.id);
    const res = await axios.post(`http://localhost:3000/product`,formvalue,);
   setFormvalue({...formvalue,id:"",cate_id:"",prod_Name:"",desc:"",price:"",img:""});
   
   return false;
  };
};


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
   
 
  <form action="" method="post" onSubmit={SubmitHandele}>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Categories Name:</label>
                                        <select onChange={ChangeHandle} name="cate_id" className="form-control" >
                                            <option value="">-----------  Select Product Categories -------------</option>
                                            
                                            
                                            {
                                                data && data.map((value, index, arr) => {
                                                   return (
                                                        <option  ref={inputRef} id={value.Cat_Name} value={value.id }>{value.Cat_Name} </option>
                                                    )
                                         
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Product Name:</label>
                                        <input type="text" value={formvalue.prod_name} onChange={ChangeHandle} name="prod_name"  className="form-control" placeholder="Enter Product Name"  />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Description:</label>
                                        <textarea  value={formvalue.desc} onChange={ChangeHandle} name="desc"  className="form-control"></textarea>
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Product Price:</label>
                                        <input type="number" value={formvalue.price} onChange={ChangeHandle} name="price"  className="form-control" placeholder="Enter Product Price"  />
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

export default Add_product