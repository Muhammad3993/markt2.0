import { useEffect, useState } from "react"
import { productsApi } from "../data/productsApi"

const Products = () => {
    const [productsResponse, setProductsResponse] = useState(null)

    useEffect(() => {
        const getProductsApi = async () => {
            const response = await productsApi.getProductsApi()
            setProductsResponse(response)
        }

        getProductsApi()
    },[])
  return (
    <div>
        <pre>{JSON.stringify(productsResponse, null, 2)}</pre>
    </div>
  )
}

export default Products;