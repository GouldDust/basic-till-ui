import React, { Component } from 'react';
import axios from '../axios-products';
import Spinner from '../Spinner/Spinner';
import Product from '../model/Product';
import ProductItem from './Product/ProductItem';
import classes from './ProductList.module.css';

interface IProductListProps {
    addProduct: (product: Product) => void;
}

interface IProductListState {
    products: Product[];
}

class ProductList extends Component<IProductListProps, IProductListState> {
    constructor(props: IProductListProps) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get('')
        .then(response => {
            this.setState(prevState => {
                return {
                    products: response.data.map((
                        p: { Id: number; Name: string; Description: string; SalePrice: number; }) => 
                        new Product(p.Id, p.Name, p.Description, p.SalePrice))
                }
            }) 
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        let products = <Spinner />;

        if (this.state.products) {
            products = <>
                {this.state.products.map(p =>
                    <ProductItem key={p.Id} product={p} addProduct={this.props.addProduct} />)}
            </>
        }

        return (
            <div className={classes.ProductList}>
                {products}
            </div>
        );
    }
}

export default ProductList;
