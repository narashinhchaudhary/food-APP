import React,{useState,useEffect} from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'



function Signup() {

    const redirect=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('uid'))
        {
            return redirect('/')
        }
    },[]);
   
    

     const [formvalue,setFormvalue]=useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
      password: "",
      passwordConfirmation: "",
      status:"",
      id:""
     });
    
    const changeHandele=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"unblock",[e.target.name]:e.target.value});
        console.log(setFormvalue)

     };
  function validation (){
    let res=true;
if (formvalue.id == "") {
    console.log("name required");
    res=false;
    return res;
}
if (formvalue.firstname == "") {
    console.log("name required");
    res=false;
    return res;
}
if (formvalue.lastname == "") {
    console.log("lastname required");
    res=false;
    return res;
}

if (formvalue.email == "") {
    console.log("email required");
    res=false;
    return res;
}
if (formvalue.phone == "") {
    console.log("phone required");
    res=false;
    return res;
}
if (formvalue.password == "") {
    console.log("password required");
    res=false;
    return res;
}
if (formvalue.passwordConfirmation !==  formvalue.password) {
    console.log("wrong password ");
    res=false;
    return res;
}

if (formvalue.status == "") {
    console.log("status required");
    res=false;
    return res;
}
return res;
  };

  const submitHandel=async(e)=>{
    e.preventDefault(); // not reload page
    if(validation())
    {
        const res=await axios.post(`http://localhost:3000/user2`,formvalue);
        console.log(res);
        setFormvalue({...formvalue,id:"",firstname:"",lastname:"",password:"",passwordConfirmation:"",email:"",phone:""});
        toast.success("  cart Added  Success !")
        return false;
    }
};
  return (
    <>
    <Header1/>


   <div className="container" style={{'marginTop':'10%'}}>
    <div className="row py-5 mt-4 align-items-center">
       
        <div className="col-md-7 col-lg-6 ml-auto">
            <form method='post' onSubmit={submitHandel}>
                <div className="row">

                    
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input type="text"  value={formvalue.firstname} onChange={changeHandele} name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md"/>
                     
                    </div>

               
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="lastName" type="text"  value={formvalue.lastname} onChange={changeHandele}  name="lastname" placeholder="Last Name" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                   
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input id="email" type="email" name="email"  value={formvalue.email} onChange={changeHandele}  placeholder="Email Address" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                  
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-phone-square text-muted"></i>
                            </span>
                        </div>
                       
                        <input id="phoneNumber" type="tel"  value={formvalue.phone} onChange={changeHandele} name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3"/>
                    </div>.
                   
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="password" type="password"  value={formvalue.password} onChange={changeHandele}  name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                   
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="passwordConfirmation" type="text"  value={formvalue.passwordConfirmation} onChange={changeHandele} name="passwordConfirmation" placeholder="Confirm Password" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    <div className="form-group col-lg-12 mx-auto mb-0">
                    <button className="btn btn-primary w-100 py-3" type="submit">Signup</button>
                                      
                    </div>

                   
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>

                  
                    
                   
                    <div className="text-center w-100">
                        <p className="text-muted font-weight-bold">Already Registered? <Link to="/Login" className="text-primary ml-2">Login</Link></p>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>
    
    <Footer/>
    </>
  )
}

export default Signup