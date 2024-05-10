import React,{useState,useEffect} from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import { Link,useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {

    const redirect=useNavigate();

    useEffect(()=>{
   if (localStorage.getItem(`uid`)) {
    return redirect('/')
   }


    },[]);

    const [formvalue,setFormvalue]=useState({
        name: "",
        email: "",
    });

    const changeHandele =(e)=>{
        setFormvalue({...formvalue,[e.target.name]:e.target.value});
        };
     function validation()
    {
        var res=true;
       
        if(formvalue.email=="")
        {
             res=false;
            return false;
        }
        if(formvalue.password=="")
        {
             res=false;
            return false;
        }
        
        return res;
    } 

    const submitHandel=async(e)=>{
        e.preventDefault(); // not reload page
        if(validation())
        {
            const res=await axios.get(`http://localhost:3000/user2?email=${formvalue.email}`);
            console.log(res.data);
   
            if(res.data.length>0)
            {
   
                if(res.data[0].password==formvalue.password)
                {
   
                   
                        // session create
                        localStorage.setItem('uid',res.data[0].id);
                        localStorage.setItem('uname',res.data[0].firstname);
                        console.log(localStorage.setItem)
                        redirect('/');

                        toast.success("  login  Success !")
                        return false;     
                    
                     
                }
                else
                {console.log("hello7");
   
                    setFormvalue({...formvalue,email:"",password:""});
                    toast.danger("  login  failed !")
                     return false;
                }
            }
            else
            {console.log("hello8");
   
                setFormvalue({...formvalue,email:"",password:""});

                toast.danger("  login  failed !")
                    
                 return false;
            }
           
        }
    }

  return (
    <>
    <Header1/>
    <div className="container" >
    <div className="row py-5 mt-4 align-items-center">
       
        <div className="col-md-7 col-lg-6 ml-auto" style={{'marginTop':'100px'}}>
            <form  method="post"  onSubmit={submitHandel} >
                <div className="row">

                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input id="email" type="email" value={formvalue.email}  onChange={changeHandele} name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"/>
                    </div>


                   
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="password" type="password" value={formvalue.password}  onChange={changeHandele} name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                   
                    
                    <div className="form-group col-lg-12 mx-auto mb-0">
                    <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                    
                    </div>

                  
                   

                   
                    <div className="text-center w-100">
                        <p className="text-muted font-weight-bold">if you are not Registered? <Link to="/Signup" className="text-primary ml-2">SIGNUP</Link></p>
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

export default Login