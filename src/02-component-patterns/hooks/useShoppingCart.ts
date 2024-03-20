import { useState } from "react";
import { Product, ProductInCart } from "../interfaces";


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});

    const onProductCountChange = ({count,product}:{count:number, product:Product}) => {
        // console.log('onProductOnChange', count, product);

        setShoppingCart(oldShoppingcart => {
            if(count === 0){

            const {[product.id]: toDelete, ...rest } = oldShoppingcart;
            console.log({toDelete});

            return rest
            }

            return {
            ...oldShoppingcart,
            [product.id]: {...product,count}
            }
        })

    }

    return{
        shoppingCart,
        onProductCountChange
    }
    
}