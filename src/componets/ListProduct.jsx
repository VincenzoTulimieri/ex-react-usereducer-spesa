import { useState } from "react"
import products from "../../data/data"

export default function ListPruduct() {
    const [addProducts, setAddProducts] = useState([])

    function addToCart(product) {
        const isProductInCart = addProducts.some(p => p.name === product.name)
        if (isProductInCart) {
            return
        }
        setAddProducts(curr => ([...curr, {
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
            {addProducts.length > 0 && (
                <ul>
                    <h2>Carrello</h2>
                    {addProducts.map((product, i) => {
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