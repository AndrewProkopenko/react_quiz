import React from 'react'
import NewContext from './NewContext'
const Products = () => (
    <div>
        <NewContext.Consumer>
            {
                context => (
                    <div>
                        <h3> Products: </h3>
                    
                        <ul>
                        {
                            Object.keys(context.products).map( productKey => (
                                <li key={productKey}>
                                    <b>
                                        {context.products[productKey].name}
                                    </b> - 

                                    <small>
                                    ${context.products[productKey].price}
                                    </small>

                                    <button onClick={() => {context.incrementPrice(productKey)}}>
                                        +
                                    </button>
                                    <button onClick={() => {context.decrementPrice(productKey)}}>
                                        -
                                    </button> 
                                </li>
                            )  )
                        }
                        </ul>
                    </div>
                )
            }
        </NewContext.Consumer>
    </div>
)

export default Products