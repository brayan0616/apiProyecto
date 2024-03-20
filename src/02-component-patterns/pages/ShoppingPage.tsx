import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { products } from "../data/products"
import { useShoppingCart } from "../hooks/useShoppingCart"


export const ShoppingPage = () => {

  const {onProductCountChange,shoppingCart} = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}
        >
            {
              products.map( product => (
                <ProductCard 
                  product={product}
                  className="bg-dark text-white"
                  key={product.id}
                  onChange={onProductCountChange}
                  value={ shoppingCart[product.id]?.count || 0 }   
                >
                  <ProductImage 
                      // img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2d6Ox1MIe5TCzUUg2v0a_gVwfe61HKZTOSg&usqp=CAU" 
                      className='custom-image'
                  />
                  <ProductTitle className='text-bold' />
                  <ProductButtons className="custom-buttons"/>
                </ProductCard>         

              ) )
            }

        </div>

        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([key,product]) => (
              <ProductCard
                  key={key}
                  product={product}
                  className="bg-dark text-white"
                  style={{
                    width: '100px'
                  }}
                  onChange={onProductCountChange}
                  value={product.count}
              >
                <ProductImage 
                    className='custom-image'
                />
                <ProductButtons 
                  className="custom-buttons" 
                  style={{
                    display: 'flex',
                    justifyContent:'center'
                  }}
                />
              </ProductCard> 
            ))
          }          
        </div>

    </div>
  )
}
