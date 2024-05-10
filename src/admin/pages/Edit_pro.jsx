import React,{useState,useEffect} from 'react'
import Aheader from '../component/Aheader'
import Afooter from '../component/Afooter'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'



function Edit_pro() {

  const redirect=useNavigate();
  const [formvalue, setFormvalue] = useState({
      id: "",
      Pro_name: "",
      img: ""
  });
  useEffect(() => {
    fetch();
}, []);

const {id}=useParams();
const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/product/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
};
const ChangeHandle = (e) => {
  setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  
};


function validation() {
  var res = true;
  if (formvalue.cate_name == "") {
       res = false;
      return false;
  }
  if (formvalue.img == "") {
      res = false;
      return false;
  }
  
  return res;
}
const SubmitHandele = async (e) => {
  e.preventDefault(); // not reload page
  if(validation())
  {
      const res = await axios.patch(`http://localhost:3000/product/${id}`, formvalue);
      setFormvalue({ ...formvalue, cate_name: "", img: "" });
       redirect('/Manage_product');
      return false;
  }
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
   
 
  <form action="" method="post" onSubmit={SubmitHandele}>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">product id</label>
                                        <input type="text" value={formvalue.id} onChange={ChangeHandle} name="prod_name"  className="form-control" placeholder="Enter Product Name"  />
                                 
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

export default Edit_pro