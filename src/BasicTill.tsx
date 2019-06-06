import React, { Component }  from 'react';
import ProductList from './Products/ProductList';
import PurchasedProducts from './Products/PurchasedProducts';
import classes from './BasicTill.module.css';
import Product from './model/Product';

interface IBasicTillState {
    purchasedNames: string[];
}

class BasicTill extends Component<{}, IBasicTillState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            purchasedNames: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.clearProducts = this.clearProducts.bind(this);
        this.payNow = this.payNow.bind(this);
    }

    addProduct(product: Product) {
        if (!this.state.purchasedNames.find(p => p === product.Name)) {
            this.setState(prevState => {
                return {
                    purchasedNames: [...prevState.purchasedNames, product.Name]
                }
            });
        }
    }

    clearProducts() {
        this.setState(prevState => { 
            return {
                purchasedNames: []
            }
        });
    }

    payNow() {
        console.error("Not yet implemented");
        alert("Not yet implemented");
    }

    render() {
        return (
            <div className={classes.BasicTill}>
                <h1>Till System</h1>
                <ProductList addProduct={this.addProduct}/>
                <PurchasedProducts products={this.state.purchasedNames} 
                    clearProducts={this.clearProducts}
                    payNow={this.payNow} />
            </div>
        );
    }
}

export default BasicTill;