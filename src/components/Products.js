import React, { Component } from 'react';
import util from '../util'
export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}>
                        <img src={product.img_url} alt={product.name} />
			<br/>
                        {product.name}                        
                    </a>
		&nbsp; &nbsp;	
                    <b>{util.formatCurrency(product.price)}</b>
		&nbsp; &nbsp;	
                    <b>{product.discount+'%'}</b>
			<br/>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
