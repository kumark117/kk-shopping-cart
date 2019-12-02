import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div className="row">
                <div className="col-xs-4">
                    {`${this.props.count} products found.`}
                </div>
               <div className="col-xs-4">
                    <label>Order by
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                            <option value="discount">Discount</option>
                        </select>
                    </label>
                </div>

                <div className="col-xs-4">
                    <label > Search
               <input className="form-control" value={this.props.searchText} placeholder="search.." onChange={this.props.handleSearchTextChange}/>
                    </label>
                </div>
            </div>
        )
    }
}
