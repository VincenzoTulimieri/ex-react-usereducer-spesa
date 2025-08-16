import products from "../../data/data"

export default function ListPruduct(){
    return(
        <>
        <ul>
            {products.map(product =>{
                return(
                    <li>{product.name}:{product.price} €</li>
                )
            })}
        </ul>
        </>
    )
}