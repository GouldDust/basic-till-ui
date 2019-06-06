import React from 'react';
import classes from './PurchasedProducts.module.css';

interface IPurchasedProductsProps {
    products: string[]
}

const PurchasedProducts: React.FC<IPurchasedProductsProps> = (props: IPurchasedProductsProps) => {
    return (
      <div className={classes.PurchasedProducts}>
        {props.products.map(p => <h4>{p}</h4>)}
      </div>
    );
  }

  export default PurchasedProducts;