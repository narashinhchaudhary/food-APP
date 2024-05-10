import React,{useState,useEffect} from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Profile() {


   
    const redirect = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('uid')) {
            fetch();

        
        }
        else {
            return redirect('/')
        }
    }, []);

    const [formvalue,setFormvalue]=useState({
      firstname: " ",
      lastname: " ",
      email: "",
      phone: "",
      password: "",
        id: "",
      });   
    
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user2/${localStorage.getItem('uid')}`);
       
        
        setFormvalue(res.data);
    }
    


        
       


    const changeHandel=(e)=>{
        setFormvalue({...formvalue,[e.target.name]:e.target.value});
        console.log(formvalue);
     }
    
    function validation()
    {
        var res=true;
        if(formvalue.firstname=="" )
        {
            console.log("Name Field is required !");
            res=false;
            return false;
        }
        if(formvalue.lastname=="")
        {
            console.log("lastName Field is required !");
            res=false;
            return false;
        }
        if(formvalue.email=="")
        {
            console.log("Email Field is required !");
            res=false;
            return false;
        }
       
        
        if(formvalue.phone=="")
        {
            console.log("Mobile Field is required !");
            res=false;
            return false;
        }
        
        return res;
    } 


    const submitHandel=async(e)=>{
        e.preventDefault(); // not reload page
        if(validation())
        {
          
          localStorage.setItem('uname',formvalue.firstname);


            const res=await axios.patch(`http://localhost:3000/user2/${formvalue.id}`,formvalue);
            //console.log(res);
            setFormvalue({...formvalue, 
              firstname: " ",
            lastname: " ",
            email: "",
            phone: "",
            password: "",
             id: "",});
           fetch();
            return false;
        }
    }


  return (

    

    <>
     <Header1/>
     <div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
  <div className="container">
    <div className="row">
      <div className="col-12">
        {/* Page title */}
        <div className="my-5">
          <h3>My Profile</h3>
          <hr />
        </div>
        {/* Form START */}
        <form className="file-upload">
          <div className="row mb-5 gx-5">
            {/* Contact detail */}
            <div className="col-xxl-8 mb-5 mb-xxl-0">
              <div className="bg-secondary-soft px-4 py-5 rounded">
                <div className="row g-3">
                  <h4 className="mb-4 mt-0">Contact detail</h4>
                  {/* id */}
                  <div className="col-md-12">
                    <label className="form-label">your Id *</label>
                    <input type="text" value={formvalue.id} onChange={changeHandel} name="id" readOnly className="form-control" placeholder aria-label="First name" defaultValue="Scaralet" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">First Name *</label>
                    <input type="text" value={ formvalue.firstname} onChange={changeHandel} name="firstname" className="form-control" placeholder aria-label="First name" defaultValue="Scaralet" />
                  </div>
                  {/* Last name */}
                  <div className="col-md-6">
                    <label className="form-label">Last Name *</label>
                    <input type="text" value={formvalue.lastname} onChange={changeHandel} name="lastname" className="form-control" placeholder aria-label="Last name" defaultValue="Doe" />
                  </div>
                 
                  {/* Mobile number */}
                  <div className="col-md-6">
                    <label className="form-label">Mobile number *</label>
                    <input type="text" value={formvalue.phone} onChange={changeHandel} name="phone" className="form-control" placeholder aria-label="Phone number" defaultValue="+91 9852 8855 252" />
                  </div>
                  {/* Email */}
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email *</label>
                    <input type="email" value={formvalue.email} onChange={changeHandel} name="email" className="form-control" id="inputEmail4" defaultValue="example@homerealty.com" />
                  </div>
                 
                </div> {/* Row END */}
              </div>
            </div>
            {/* Upload profile */}
            <div className="col-xxl-4">
              <div className="bg-secondary-soft px-4 py-5 rounded">
                <div className="row g-3">
                  <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                  <div className="text-center">
                    {/* Image upload */}
                    <div className="square position-relative display-2 mb-3">
                      <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary" />
                    </div>
                    {/* Button */}
                    <input type="file" id="customFile" name="file" hidden />
                    <label className="btn btn-success-soft btn-block" htmlFor="customFile">Upload</label>
                    <button type="button" className="btn btn-danger-soft">Remove</button>
                    {/* Content */}
                    <p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Minimum size 300px x 300px</p>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* Row END */}
          {/* Social media detail */}
          <div className="row mb-5 gx-5">
            <div className="col-xxl-6 mb-5 mb-xxl-0">
              <div className="bg-secondary-soft px-4 py-5 rounded">
                <div className="row g-3">
                  <h4 className="mb-4 mt-0">Social media detail</h4>
                  {/* Facebook */}
                  <div className="col-md-6">
                    <label className="form-label"><i className="fab fa-fw fa-facebook me-2 text-facebook" />Facebook *</label>
                    <input type="text" className="form-control" placeholder aria-label="Facebook" defaultValue="http://www.facebook.com" />
                  </div>
                  {/* Twitter */}
                  <div className="col-md-6">
                    <label className="form-label"><i className="fab fa-fw fa-twitter text-twitter me-2" />Twitter *</label>
                    <input type="text" className="form-control" placeholder aria-label="Twitter" defaultValue="http://www.twitter.com" />
                  </div>
                  {/* Linkedin */}
                  <div className="col-md-6">
                    <label className="form-label"><i className="fab fa-fw fa-linkedin-in text-linkedin me-2" />Linkedin *</label>
                    <input type="text" className="form-control" placeholder aria-label="Linkedin" defaultValue="http://www.linkedin.com" />
                  </div>
                  {/* Instragram */}
                  <div className="col-md-6">
                    <label className="form-label"><i className="fab fa-fw fa-instagram text-instagram me-2" />Instagram *</label>
                    <input type="text" className="form-control" placeholder aria-label="Instragram" defaultValue="http://www.instragram.com" />
                  </div>
                  {/* Dribble */}
                  <div className="col-md-6">
                    <label className="form-label"><i className="fas fa-fw fa-basketball-ball text-dribbble me-2" />Dribble *</label>
                    <input type="text" className="form-control" placeholder aria-label="Dribble" defaultValue="http://www.dribble.com" />
                  </div>
                  {/* Pinterest */}
                  <div className="col-md-6">
                    <label className="form-label"><i className="fab fa-fw fa-pinterest text-pinterest" />Pinterest *</label>
                    <input type="text" className="form-control" placeholder aria-label="Pinterest" defaultValue="http://www.pinterest.com" />
                  </div>
                </div> {/* Row END */}
              </div>
            </div>
            {/* change password */}
            <div className="col-xxl-6">
              <div className="bg-secondary-soft px-4 py-5 rounded">
                <div className="row g-3">
                  <h4 className="my-4">Change Password</h4>
                  {/* Old password */}
                  <div className="col-md-6">
                    <label htmlFor="exampleInputPassword1" className="form-label">Old password *</label>
                    <input type="password" value={formvalue.password} onChange={changeHandel} name="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  {/* New password */}
                  <div className="col-md-6">
                    <label htmlFor="exampleInputPassword2" className="form-label">New password *</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" />
                  </div>
                  {/* Confirm password */}
                  <div className="col-md-12">
                    <label htmlFor="exampleInputPassword3" className="form-label">Confirm Password *</label>
                    <input type="password" className="form-control" id="exampleInputPassword3" />
                  </div>
                </div>
              </div>
            </div>
          </div> {/* Row END */}
          {/* button */}
          <div className="gap-3 d-md-flex justify-content-md-end text-center">
            <button type="button" className="btn btn-danger btn-lg">Delete profile</button>
            <button type="button" onClick={submitHandel} className="btn btn-primary btn-lg">Update profile</button>
          </div>
        </form> {/* Form END */}
      </div>
    </div>
  </div>
</div>


<Footer/>
     </> 
  )
}

export default Profile