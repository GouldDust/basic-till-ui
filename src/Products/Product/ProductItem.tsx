import React from 'react';
import Product from '../../model/Product';
import classes from './ProductItem.module.css';

interface IProductProps {
    product: Product;
    addProduct: (product: Product) => void;
}

const ProductItem: React.FC<IProductProps> = (props: IProductProps) => {
    return (
        <div className={classes.ProductItem} onClick={() => props.addProduct(props.product)}>
            <h4>{props.product.Name}</h4>
            <h4>£{props.product.Price.toFixed(2)}</h4>
            <p>{props.product.Description}</p>
        </div>
    )
};

export default ProductItem;