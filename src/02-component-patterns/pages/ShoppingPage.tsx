import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {

  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}
        >
            <ProductCard product={product} className="bg-dark text-white">
              <ProductCard.Image className='custom-image'/>
              <ProductCard.Title title="Cafe" className='text-bold'/>
              <ProductCard.Buttons className="custom-buttons"/>
            </ProductCard> 

            <ProductCard 
              product={product}
              className="bg-dark text-white"
            >
              <ProductImage 
                  // img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2d6Ox1MIe5TCzUUg2v0a_gVwfe61HKZTOSg&usqp=CAU" 
                  className='custom-image'
              />
              <ProductTitle title="Dragon ball"className='text-bold' />
              <ProductButtons className="custom-buttons"/>
            </ProductCard>

            <ProductCard 
              product={product}
              style={{
                backgroundColor: '#70D1F8'
              }}
            >
              <ProductImage
                // img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2d6Ox1MIe5TCzUUg2v0a_gVwfe61HKZTOSg&usqp=CAU"      
                style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
                  borderRadius: 20,
                  padding: 10,
                  width: 230

                }}
              />
              <ProductTitle title="Dragon ball" style={{
                fontWeight: "bold"
              }} />
              <ProductButtons style={{
                display: 'flex',
                justifyContent: 'end'
              }}/>
            </ProductCard>

            
        </div>

    </div>
  )
}
