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
                    productDetails.map(function([key, value], index) {
                      if(key == "image"){
                        return (
                          <tr key={index.toString()}>
                            <td>{`${key}:`}</td>
                            <td>
                            <img src={value} height="100" width="100" object-fit="cover"/>
                              {/* <CImg src={item.images}
                              /> */}
                            </td>
                          </tr>
                        )
                      }

                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    })

                    // productDetails.map(([key, value], index) => {
                    //   return (
                    //     <tr key={index.toString()}>
                    //       <td>{`${key}:`}</td>
                    //       if(key === "image"){
                    //         <td>
                    //         <img src={value} height="60" width="60" object-fit="cover"/>
                    //          {/* <CImg src={item.images}
                    //           /> */}
                    //       </td>
                    //       }
                    //       else{
                    //         <td><strong>{value}</strong></td>
                    //       }
                          
                    //     </tr>
                    //   )
                    // })
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
