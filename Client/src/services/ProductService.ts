import { safeParse } from "valibot";
import axios from "axios";
import {DraftProductSchema,  ProductListSchema} from "../types/index";



type ProductData = {
     [k: string]: FormDataEntryValue;
};


export async function addProduct(product:ProductData) {
    try {
        const parsedProduct = safeParse(DraftProductSchema, {
            name: product.name,
            price: Number(product.price)
        });
        if(parsedProduct.success){
            const url =`${import.meta.env.VITE_API_URL}/api/products`
            const {data} = await axios.post(url, {
                name: parsedProduct.output.name,
                price: parsedProduct.output.price
            })

            console.log("Product added successfully:", data);
            
        }else{
           throw new Error("Invalid product data"); 
        }
        

    } catch (error) {
        console.error("Error adding product:", error);
        throw new Error("Failed to add product");
        
    }
}

export async function getProducts() {
    try{
        const url = `${import.meta.env.VITE_API_URL}/api/products`;
        const {data} = await axios.get(url);
        const parsedData = safeParse(ProductListSchema, data.data);
        console.log("Products fetched successfully:", parsedData);
        if(parsedData.success) {
            return parsedData.output;
        } else {
            throw new Error("Invalid product data format");
        }
    }catch(error) {
        console.log("Error fetching products:", error);
        
    }
}