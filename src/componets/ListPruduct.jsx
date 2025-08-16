import products from "../../data/data"

export default function ListPruduct(){
    return(
        <>
        <ul>
            {products.map((product, i) =>{
                return(
                    <li key={i}>{product.name}:{product.price.toFixed(2)} €</li>
                )
            })}
        </ul>
        </>
    )
}