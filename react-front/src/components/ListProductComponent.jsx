import React, { Component } from 'react';
import {Button , Navbar , Container, Col} from 'react-bootstrap';
import ProductService from '../services/ProductService';

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: [],
                currentPage : 1,
                productsPerPage :5
        }
     }
viewProduct(id){
    this.props.history.push(`/view-product/${id}`);
}


 //calling REst api client code and filling data into product array
     componentDidMount (){
         ProductService.getProduct().then((res)=>{
             this.setState({ products: res.data});
         });
     }
     prevPage= () => {
        if(this.state.currentPage > 1){
            this.setState({
                currentPage:  this.state.currentPage - 1
            });
        }
    };
    nextPage = () => {

        if(this.state.currentPage < Math.ceil(this.state.products.length/this.state.productsPerPage)){
            this.setState({
                currentPage:  this.state.currentPage  + 1
            });
        }
    };

    render() {
        const {products,currentPage,productsPerPage} = this.state;
        const lastIndex = currentPage * productsPerPage;
        const firstIndex = lastIndex - productsPerPage;
        const currentProducts = products.slice(firstIndex, lastIndex);
        const totalPages = products.length /productsPerPage;
        const calc= Math.ceil(this.state.products.length/this.state.productsPerPage)
        return (            
        <div>
            
            <h2 className="text-center">Products List</h2>
            
            <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                               <th> price</th>
                               <th> type</th>
                               <th> brand</th>
                               <th> title</th>
                               <th>image</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               currentProducts.map(
                                   products => 
                                   <tr key = {products.id}>
                                        <td> {products.price} </td>   
                                        <td> {products.type}</td>
                                        <td> {products.brand}</td>
                                        <td> {products.title}</td>
                                        <td> <img src= {products.image}
                                                alt={products.name} /></td>
                                        <td> <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(products.id)} className="btn btn-info">View </button>
                                             </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   
            <Navbar fixed="bottom" bg="light" variant="light">
               <Container>
                   <Col lg={12} style={{"textColor":"white"}}>
                       <div style= {{"float":"left"}}>
                           showing {currentPage} of {calc}
                       </div>
                       <div>
                        <center>
                            <Button type="button" variant="outline-info" disabled={currentPage === 1? true : false} onClick={this.prevPage}>
                                Prev
                            </Button>
                            
                            <Button type="button" variant="outline-info" disabled={currentPage === totalPages? true : false} onClick={this.nextPage}>
                                Next
                            </Button>
                       </center> 
                       </div>
                   </Col>
               </Container>
           </Navbar>
            </div>
                     
       </div>
        );
    }
}

export default ListProductComponent;