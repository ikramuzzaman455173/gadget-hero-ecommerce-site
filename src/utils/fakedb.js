// //add data to localStorage
// const addDb = (id) => {
//   let shoppingCart = {}
//   //get prvious shopping data
//   const storedCart = localStorage.getItem('shopping-cart')
//   if (storedCart) {
//     shoppingCart=JSON.parse(storedCart)
//   }

//   // add quantity
//   const quantity = shoppingCart[id]
//   if (quantity) {
//     const newQuantity = quantity + 1
//     shoppingCart[id]=newQuantity
//   } else {
//     shoppingCart[id]=1
//   }
//   localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
// }

// export{addDb}



// add data to local storage

const addDb = (id) => {
  let shoppingCart = {}
  //get previous shopping data for stoarge
  const storedCart = localStorage.getItem("shopping-cart")
  if (storedCart) {
    // shoppingCart= JSON.parse(storedCart)
    shoppingCart = JSON.parse(storedCart)
  }
  // add quanTity products
  const quanTity = shoppingCart[id]
  if (quanTity) {
    const newQuantity = quanTity + 1
    shoppingCart[id]=newQuantity
  } else {
    shoppingCart[id] = 1
  }
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}


const getStoredCart = () => {
  let shoppingCart = {}
  //get previous shopping data for stoarge
  const storedCart = localStorage.getItem("shopping-cart")
  if (storedCart) {
    shoppingCart=JSON.parse(storedCart)
  }
  return shoppingCart
}

// remove specefic element from localStorage
const removeFromDb = (id) => {
  //get previous shopping data for stoarge
  const storedCart = localStorage.getItem("shopping-cart")
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart)
    if (id in shoppingCart) {
      delete shoppingCart[id]
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
    }
  }
}

// clear all data from localStorage
const clearShoppingCart = () => {
  localStorage.removeItem('shopping-cart')
}
export { addDb, getStoredCart , removeFromDb,clearShoppingCart}



















