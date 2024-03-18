import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"


const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {

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
            <ProductCard product={product}>
              <ProductCard.Image />
              <ProductCard.Title title="Cafe"/>
              <ProductCard.Buttons />
            </ProductCard> 

            <ProductCard product={product}>
              <ProductImage img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2d6Ox1MIe5TCzUUg2v0a_gVwfe61HKZTOSg&usqp=CAU" />
              <ProductTitle title="Dragon ball"/>
              <ProductButtons />
            </ProductCard>
        </div>

    </div>
  )
}
