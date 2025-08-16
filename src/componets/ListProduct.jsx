import { useState } from "react"
import products from "../../data/data"

export default function ListPruduct() {
    const [addedProducts, setAddedProducts] = useState([])

    function updateProductQuantity(name, quantity){
        setAddedProducts(curr=>curr.map(p=>{
            if(p.name === name){
                return {
                    ...p,
                    quantity
                }
            }
            return p
        }))
    }

    function addToCart(product) {
        const addProducts = addedProducts.find(p => p.name === product.name)
        if (addProducts) {
            updateProductQuantity(addProducts.name, addProducts.quantity + 1)
            return
        }
        setAddedProducts(curr => ([...curr, {
            ...product,
            quantity: 1
        }]))
    }


    return (
        <>
            <ul>
                {products.map((product, i) => {
                    return (
                        <li key={i}>
                            <p>{product.name}:{product.price.toFixed(2)} €</p>
                            <button onClick={() => addToCart(product)}>Aggingi al carrello</button>
                        </li>
                    )
                })}
            </ul>
            {addedProducts.length > 0 && (
                <ul>
                    <h2>Carrello</h2>
                    {addedProducts.map((product, i) => {
                       return(
                        <li key={i}>
                            <p>{product.quantity}:{product.name}({product.price.toFixed(2)} €)</p>
                        </li>
                       ) 
                    })}
                </ul>
            )}

        </>
    )
}