import React, { Component } from 'react';
export default class Products extends Component {

constructor(props) {
	super(props);
}

    render() {


        return (
            <div className="row">
                <div className="col-md-4">
                    {`${this.props.count} products found.`}
                </div>
                <div className="col-md-4">
                    <label>Order by
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                            <option value="discount">Discount</option>
                        </select>
                    </label>
                </div>

                <div className="col-md-4">
                    <label > Search
                    </label>
               <input value={this.props.searchText} placeholder="search.." onChange={this.props.handleSearchTextChange}/>
                </div>
            </div>
        )
    }
}
