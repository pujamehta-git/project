import React, { Component } from 'react';
import ProductService from '../services/ProductService'


class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }


    render() {
        return (<div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> Product Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Product : </label>
                        <div> { this.state.product.title }</div>
                    </div>
                    <div className = "row">
                        <div> { this.state.product.brand }</div>
                    </div>
                    
                    <div className = "row">
                        <h6>$</h6>
                        <div> { this.state.product.price }</div>
                    </div>

                    <div className = "row">
                            <div>
                        
                            <img src= {this.state.product.image}
                                             />
                            </div>
                    </div>
                    
                </div>

            </div>
        </div>

        );
    }
}

export default ViewProductComponent;