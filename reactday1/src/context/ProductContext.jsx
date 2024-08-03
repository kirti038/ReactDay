import React, { createContext } from 'react'

export const PhoneContext =  createContext()

const ProductContext = ({children}) => {

    const PhoneData  = [
        {
          id: 1,
          name: "Samsung Galaxy S21",
          price: 799,
          color: "Phantom Gray",
          company: "Samsung",
          memory: "128GB",
          description: "Flagship phone with excellent camera, sleek design, and powerful performance for everyday use."
        },
    
       
      ];
      
  return (
    <div>
        <PhoneContext.Provider value={PhoneData}>
        {children}
        </PhoneContext.Provider>
    </div>
  )
}

export default ProductContext