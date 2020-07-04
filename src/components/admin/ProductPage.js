import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ProductsContext } from "./ProductsProvider"

import ProductForm from "./ProductForm"

function ProductPage({ productId, create }) {
  const { products } = useContext(ProductsContext)
  if (create) {
    const product = { skus: [{ inventory: { type: "infinite" }, price: "" }] }
    return <ProductForm product={product} create></ProductForm>
  } else if (productId && products[productId]) {
    const product = products[productId]
    return <ProductForm product={product} create={false}></ProductForm>
  } else {
    return <div>Loading...</div>
  }
}

ProductPage.propTypes = {
  productId: PropTypes.string,
  create: PropTypes.bool,
}

export default ProductPage
