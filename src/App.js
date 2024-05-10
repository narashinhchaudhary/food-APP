
import { BrowserRouter,Routes,Route } from 'react-router-dom';



import Home from './project/pages/Home';
import Shop from './project/pages/Shop';
import ShopDetails from './project/pages/ShopDetails';
import Testimonial from './project/pages/Testimonial';
import Cart from './project/pages/Cart';
import Cheakout from './project/pages/Cheakout';
import Contact from './project/pages/Contact';
import Login from './project/pages/Login';
import Signup from './project/pages/Signup';
import Profile from './project/pages/Profile';




import Adashboard from '../src/admin/pages/Adashboard';
import Add_categoiries from '../src/admin/pages/Add_categories'
import Add_product from '../src/admin/pages/Add_product'
import Alogin from '../src/admin/pages/Alogin'
import Edit_cate from '../src/admin/pages/Edit_cate'
import Edit_pro from '../src/admin/pages/Edit_pro'
import Manage_categoriesge_ from '../src/admin/pages/Manage_categories'
import Manage_product from '../src/admin/pages/Manage_product'
import Manage_user from '../src/admin/pages/Manage_user'
import { useState } from 'react';



import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';







function App( ) {
   
   const [cart,Setcart]= useState([])
   const handleclick=(val)=>{
    


    const already = cart .find(item => item.id === val.id);
if (already=== undefined) {
  Setcart(    [...cart, {...val,quantity:0}]
   
  )
}
else{
   
}

toast.success("  cart Added  Success !")
 
   }
    
   
  
  return ( 
    
    <BrowserRouter>
    <ToastContainer ></ToastContainer>
    <Routes>
      {
        //website
}
      

<Route exact path='/' element={<> <Home   handleclick={handleclick} cart={cart}/> </>}></Route>
<Route exact path='/Shop'  element={<> <Shop handleclick={handleclick}  /> </>}></Route>
<Route  path='/ShopDetails' element={<> <ShopDetails/> </>}></Route>
<Route exact path='/Testimonial' element={<> <Testimonial/> </>}></Route>
<Route exact path='/Cart'   element={<> <Cart     cart={cart}/> </>}></Route>
<Route exact path='/Cheakout' element={<> <Cheakout cart={cart} /> </>}></Route>
<Route exact path='/Contact' element={<> <Contact/> </>}></Route>
<Route exact path='/Login' element={<> <Login/> </>}></Route>
<Route exact path='/Signup' element={<> <Signup/> </>}></Route>
<Route exact path='/Profile' element={<> <Profile/> </>}></Route>



{
//admin
}

<Route exact path='/admin' element={<> <Adashboard/> </>}></Route>

<Route  exact path='/Add_categoiries' element={<> <Add_categoiries/> </>}></Route>

<Route   path='/Alogin' element={<> <Alogin/> </>}></Route>

<Route  exact path='/Add_product' element={<> <Add_product/> </>}></Route>

<Route  exact path='/Edit_cate/:id' element={<> <Edit_cate/> </>}></Route>

<Route  exact path='/Edit_pro/:id' element={<> <Edit_pro/> </>}></Route>

<Route  exact path='/Manage_categoriesge' element={<> <Manage_categoriesge_/> </>}></Route>

<Route  exact path='/Manage_product' element={<> <Manage_product/> </>}></Route>
<Route exact path='/Manage_user' element={<> <Manage_user/> </>}></Route>



     


   
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
