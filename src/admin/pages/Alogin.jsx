import React,{useState,useEffect} from 'react'
import Afooter from '../component/Afooter'
import Aheader from '../component/Aheader'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

function Alogin() {

  const redirect=useNavigate();
  useEffect(()=>{
if (localStorage.getItem(`aid`)) {
  return redirect(`/Adashboard`);
}

  },[]);


  const [formvalue,setFormvalue]=useState({
      name:"",
      email:"",
  });

  const changeHandele=(e)=>{

    setFormvalue({...formvalue,[e.target.name]:e.target.value});
   
  }

  function validation(){
    var res=true;
     
    if(formvalue.email=="")
    {
        console.log("Email Field is required !");
        res=false;
        return false;
    }
    if(formvalue.password=="")
    {
        console.log("Password Field is required !");
        res=false;
        return false;
    }
    
    return res;

  };

  const submitHandle= async(e)=>{
    e.preventDefault();

    if (validation()) {
      const res= await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
      console.log(res.data);
      if (res.data.length>0) {
        if (res.data[0].password==formvalue.password) {
          // session create
          localStorage.setItem('aid',res.data[0].id);
          localStorage.setItem('aname',res.data[0].name);
          
          redirect('/Adashboard');
          return false;     
        }
        else
        {
            setFormvalue({...formvalue,email:"",password:""});
            console.log("data 1 not mach")
       
             return false;
        } 
      }
      else
      {
          setFormvalue({...formvalue,email:"",password:""});
          console.log("data 2 not mach")
       
          return false;
      }
    }
    else
    {
        setFormvalue({...formvalue,email:"",password:""});
        console.log("data 3 not mach")
        return false;
    }
  }
  return (
    <>
    <Aheader/>
<main id="main" class="main">

<div class="pagetitle">
<h2>login</h2>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item">ADD</li>
         </ol>
  </nav>
</div>

<section class="section">
  <div class="row">
   
 
  <form action="" method="post" onSubmit={submitHandle}>
                                    
                                        
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" value={formvalue.email} onChange={changeHandele} name="email"  className="form-control" placeholder="Enter Email"  />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">password</label>
                                        <input type="password" value={formvalue.password} onChange={changeHandele} name="password"  className="form-control" placeholder="Enter password"  />
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

export default Alogin