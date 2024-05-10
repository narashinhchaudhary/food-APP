

const Card_reducer = (state,action) => {
  return state;

  if (action.type=== "Add_cart") {
    let{id,prod_name,img,price}=action.payload;
     console.log(id,prod_name)
  }
}

export default Card_reducer