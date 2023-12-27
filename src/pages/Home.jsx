import { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const API_URL = 'https://fakestoreapi.com/products';

    const fetchProductsData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            if (data) {
                setIsLoading(false);
                setProducts(data);
            }
        } catch (error) {
            console.log(`Error Fetching Products Data - ${error}`);
        }
    }

    useEffect(() => {
        fetchProductsData()
    }, [])

    return (
        <div>
            {
                isLoading ?
                    <div className="fixed top-0 left-0 min-h-screen min-w-full flex justify-center items-center">
                        <ThreeDots color="#1e293b"/>
                    </div> : 
                    <div className="w-11/12 my-10 m-auto grid grid-cols-1 md:grid-cols-2 max-w-6xl lg:grid-cols-3 gap-4 md:gap-6">
                        {products.map(singleProduct => (
                                <ProductCard key={singleProduct.id} product={singleProduct} />
                            ))}
                    </div>
            }
        </div>
    )
}

export default Home