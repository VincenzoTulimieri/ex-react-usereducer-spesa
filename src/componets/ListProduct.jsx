import { useState } from "react"
import products from "../../data/data"

export default function ListProduct() {
    const [addedProducts, setAddedProducts] = useState([])

    function updateProductQuantity(name, quantity) {
        setAddedProducts(curr => curr.map(p => {
            if (p.name === name) {
                return {
                    ...p,
                    quantity
                }
            }
            return p
        }))

    }

    function addToCart(product) {
        const addProduct = addedProducts.find(p => p.name === product.name)
        if (addProduct) {
            updateProductQuantity(addProduct.name, addProduct.quantity + 1)
            return
        }
        setAddedProducts(curr => ([...curr, {
            ...product,
            quantity: 1
        }]))
    }

    function removeFromCart(product) {
        setAddedProducts(curr => curr.filter(p => p.name !== product.name))
    }

    const totalPay = addedProducts.reduce((acc, p) => {
        return acc + (p.price * p.quantity)
    }, 0)

    return (
        <>
            <ul>
                {products.map((product, i) => {
                    return (
                        <li key={product.name}>
                            <p>{product.name}:{product.price.toFixed(2)} €</p>
                            <button onClick={() => addToCart(product)}>Aggingi al carrello</button>
                        </li>
                    )
                })}
            </ul>
            {addedProducts.length > 0 && (
                <>
                    <ul>
                        <h2>Carrello</h2>
                        {addedProducts.map((product, i) => {
                            return (
                                <li key={product.name}>
                                    <p>{product.quantity} x {product.name}({product.price.toFixed(2)} €)</p>
                                    <button onClick={() => removeFromCart(product)}>Rimuovi</button>
                                </li>
                            )
                        })}
                    </ul>
                    <h3>Prezzo totale: {totalPay.toFixed(2)} €</h3>
                </>
            )}

        </>
    )
}