import { createContext } from "react";

// export const cartData = {
//     quantity: 0,
//     productsArray: [],
//     addProduct: (product, quantity)=>{
//         this.productsArray.push({product: product, quantity : quantity})
//         this.quantity += quantity;
//     }
// };

const cartContext = createContext();

export default cartContext