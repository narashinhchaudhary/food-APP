import React,{useState,useEffect} from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import list from '../../Data'
import Cate from '../../Cat'
import { toast } from 'react-toastify'


function Shop({val,handleclick}) {
  const [data,setData]= useState([])

  const [cate,setcate]= useState([])


  
  useEffect(()=>{
   
    searchhendle()
    fetch();
    
  },[]);

  const fetch = async()=>{
    const res= await axios.get(`http://localhost:3000/product`);
    console.log(res);
    setData(res.data);
    
   };

 

 
 
 
 const searchhendle =async()=>{
  const res= await axios.get(`http://localhost:3000/categories`);
  console.log(res);
  setcate(res.data);


 }
 
 const findhendle =async (Cat_Name) => {
  const res = await axios.get(`http://localhost:3000/product?Cat_Name=${Cat_Name}`);
  console.log(res.data);
  setData(res.data);


 }


     


  return (
    <div>
      <Header1/>
  <div>
    {/* Modal Search Start */}
    <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body d-flex align-items-center">
            <div className="input-group w-75 mx-auto d-flex">
              <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
              <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Modal Search End */}
    {/* Single Page Header start */}
    <div className="container-fluid page-header py-5">
      <h1 className="text-center text-white display-6">Shop</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item"><a href="/">Pages</a></li>
        <li className="breadcrumb-item active text-white">Shop</li>
      </ol>
    </div>
    {/* Single Page Header End */}
    {/* Fruits Shop Start*/}
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <h1 className="mb-4">Fresh fruits shop</h1>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              
              <div className="col-9" />
              <div className="col-xl-3">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                  <label htmlFor="fruits">Default Sorting:</label>
                  <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                    <option value="volvo">Nothing</option>
                    <option value="saab">Popularity</option>
                    <option value="opel">Organic</option>
                    <option value="audi">Fantastic</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-xl-3">
          <div className="row g-4 fruite">
            <div className="col-lg-12">
              
              <div className="mb-4">
                <h4>Categories</h4>
                <ul className="list-unstyled fruite-categorie">
                  <li>

                  {

Cate.map((val,index,arr)=>{
   return(
                    <div className="d-flex justify-content-between fruite-name">
                      <a to="/" onClick={()=>{findhendle(val.Cat_Name)}} ><i className="fas fa-apple-alt me-2" />{val.Cat_Name}</a>
                     
                    </div>

             )
                 })
                  }
               </li>

                  
                
                  
                </ul>
              </div>
            </div>

       </div>
       </div>
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="row g-4">
                  
                  
                
                  <div className="col-lg-12">
                    <h4 className="mb-3">Featured products</h4>

                   {

                               Cate.map((val,index,arr)=>{
                        return(

                    <div className="d-flex align-items-center justify-content-start">
                      <div className="rounded me-4" style={{width: 100, height: 100}}>
                        <img src={val.img} className="img-fluid rounded" alt="" />
                      </div>
                      <div>
                        <h6 className="mb-2">{val.Cat_Name}</h6>
                        <div className="d-flex mb-2">
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star" />
                        </div>
                        
                      </div>
                    </div>



                                )
                                })

                          }
                    
                    <div className="d-flex justify-content-center my-4">
                      <Link href="" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</Link>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="position-relative">
                      <img src="img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt="" />
                      <div className="position-absolute" style={{top: '50%', right: 10, transform: 'translateY(-50%)'}}>
                        <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row g-4 justify-content-center">
               {
                    data.map((val,index,arr)=>{
                      return(
                 

                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="rounded position-relative fruite-item">
                      <div className="fruite-img">
                        <img src={val.img} className="img-fluid w-100 rounded-top" alt="" style={{maxHeight:180}} />
                      </div>
                      <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>{val.Cat_Name}</div>
                      <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>{val.prod_name}</h4>
                        <p>{val.desc.substring(0,110)}</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                          <p className="text-dark fs-5 fw-bold mb-0">{val.price} / kg</p>
                         <button onClick={()=>handleclick(val)} className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
                         </button>
                        </div>
                      </div>
                    </div>
                  </div>

                          )
                        })
                  
                      }
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>
  )

}

export default Shop