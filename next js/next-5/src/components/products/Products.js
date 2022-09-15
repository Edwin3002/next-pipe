import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import { getAll } from '../api/getAll'

const Products = () => {

  const getData = async () => {
    const data = await getAll()
    console.log(data);
  }

useEffect(() => {
getData()
}, [])


  return (
    <div>Products</div>
  )
}

// export const getServerSideProps = context => {
//     console.log(context);
//     return {
//         props: {}
//     }
// }

export default Products