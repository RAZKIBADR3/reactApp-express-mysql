import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductIndex = () => {
    const [products, setProducts] = useState(null);

    const deleteProduct = (id) => {
        // axios.post('http://localhost:8000/products/destroy', data)
        axios.get(`http://localhost:8000/products/destroy/${id}`)
            .then(res => console.log('delete with success') )
            .catch(err => console.log(err.message) )
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/products')
            .then(res => setProducts(res.data) )
            .catch(err => setProducts(err) )
    }, [])

    return(
        <div className="container p-3">
        <h2 className="text-capitalize my-3">Products</h2>
        <table className="table table-striped mt-2">
            <thead className="bg-dark text-light">
                <tr>
                    <th>#</th>
                    <th>picture</th>
                    <th>title</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                { products == null
                    ?   <tr><td colSpan={5}>wait...</td></tr>
                    :   products.map( product => 
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>
                            <img style={{height: '160px'}} src={`/storage/img/${product.img}`} alt="product pic" />
                        </td>
                        <td>{product.title}</td>
                        <td>{product.qt}</td>
                        <td>{product.price}</td>
                        <td><input type="button" onClick={()=>deleteProduct(product.id)} className="btn btn-danger text-light" value="delete" /></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    )
}

export default ProductIndex;