import { gql } from "@apollo/client";

export const CATEGORIES = gql`
query getCategories {
    getSubCategories {
        id
        image
        name
        subCategories {
          id
          image
          name
        }
      }
}
`;
export const PRODUCT_DETAILS = gql`
  query ListProducts($code: String!) {
    getProductDetail(code: $code) {
      brand
      fullName
      description
      imageUrl
      weight {
        price
        stock
        weight
      }
    }
  }
`;

export const PRODUCTS = gql`
query Query($getProductsId: ID!) {
  getProducts(id: $getProductsId) {
    brand
    fullName
    category {
      name
    }
    code
    imageUrl
  }
}
`