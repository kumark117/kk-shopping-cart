import React, { Component } from 'react';
import styled from 'styled-components';
import util from '../util';

const Column = styled.div`
float: left;
width: 50%

@media only screen and (min-width:  768px) {
width: 25%
}
`;

export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
/*
            <div className="col-sm-4" key={product.id}>
*/
		<Column>
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
		</Column>
/*
            </div>
*/
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
