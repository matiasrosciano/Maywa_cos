import React, { Component } from 'react';
import { products, categories } from './data'

const ProductContext = React.createContext()
//Provider
//Consumer

class ProductProvider extends Component {

 state = {
  products,
  categories
 }
 render() {
  return (
   <ProductContext.Provider value={{
    ...this.state
   }}>
    {this.props.children}
   </ProductContext.Provider>
  );
 }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider,ProductConsumer};