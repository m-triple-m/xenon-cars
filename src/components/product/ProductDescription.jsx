import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../Products';

const ProductDescription = ({match}) => {
    const {id} = useParams();

    const product = products[id];
    // const product = products.find(product => product.id === id)
    console.log(id);
    console.log(product);
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <h1>{product.name}</h1>
                        <img src={product.image} className="img-fluid m-3 big-img"/>
                        <p>{products.description}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="m-2">
                        <h1>{product.Price}</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <h1>this is product disc</h1>
        </div>
    );
}

export default ProductDescription;
