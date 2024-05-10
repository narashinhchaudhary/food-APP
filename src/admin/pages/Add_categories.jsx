import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Afooter from '../component/Afooter'
import Aheader from '../component/Aheader'


function Add_categories() {
  const [Fromvalue,setFromvalue]=useState({
    "id":"",
    "Cat_Name":"",
    "img":""
  });

  const ChangeHandle = (e)=>{
    setFromvalue({ ...Fromvalue,id:new Date().getTime().toString(),[e.target.name]:[e.target.value]});
    //console.log(fromvalue)
  };

  function Validation (){
    var res = true;
       
     if (Fromvalue.Cat_Name === "") {
      console.log("not show")
         res=false;
         return false;
     };
     if (Fromvalue.img === "") {
         res= false;
         return false;
     };

       return res;
  };


  const SubmitHandle = async (e) =>{
    e.preventDefault(); 
    if(Validation())
    {
      const res = await axios.post(`http://localhost:3000/categories`,Fromvalue);
      console.log(res);
      setFromvalue({...Fromvalue, id:"" , Cat_Name:"", img:""});
      return false;
    }

    };
  return (
   <>
<Aheader/>
<main id="main" class="main">

<div class="pagetitle">
<h2>Add Categories</h2>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item">ADD</li>
         </ol>
  </nav>
</div>

<section class="section">
  <div class="row">
   
 
                                <form action="" method="post" onSubmit={SubmitHandle}>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="text" className="form-label">Categories Name:</label>
                                        <input type="text" value={Fromvalue.Cat_Name} onChange={ChangeHandle} name="Cat_Name" className="form-control" placeholder="Enter Categories Name" />
                                           </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="pwd" className="form-label">img URL:</label>
                                        <input type="url" value={Fromvalue.img} onChange={ChangeHandle} name="img" className="form-control" placeholder="Enter Img url" />
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

export default Add_categories