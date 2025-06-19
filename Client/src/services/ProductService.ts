import { safeParse } from "valibot";
import axios from "axios";
import {DraftProductSchema} from "../types/index";



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

        }else{
           throw new Error("Invalid product data"); 
        }
        

    } catch (error) {
        console.error("Error adding product:", error);
        throw new Error("Failed to add product");
        
    }
}