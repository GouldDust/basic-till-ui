import React from 'react';
import classes from './PurchasedProducts.module.css';

interface IPurchasedProductsProps {
    products: string[];
    clearProducts: () => void;
    payNow: () => void;
}

const PurchasedProducts: React.FC<IPurchasedProductsProps> = (props: IPurchasedProductsProps) => {
  const purchasedActions = props.products.some(p => p) ?
    <>
      <button type="button" className={classes.Cancel} onClick={props.clearProducts}>Clear</button>
      <button type="button" className={classes.Buy} onClick={props.payNow}>Pay Now</button>
    </> : null;

    return (
      <div className={classes.PurchasedProducts}>
        {props.products.map(p => <h4 key={p}>{p}</h4>)} 
        {purchasedActions}
      </div>
    );
  }

  export default PurchasedProducts;