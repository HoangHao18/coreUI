import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import productsData from './ProductsData'

const Product = ({match}) => {
  const product = productsData.find( product => product.id.toString() === match.params.id)
  const productDetails = product ? Object.entries(product) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]
    console.log("productDetails: ",productDetails)

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Product name: {productDetails[1][1]}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    productDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Product
