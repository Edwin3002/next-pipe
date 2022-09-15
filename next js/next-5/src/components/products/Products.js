import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import { getAll } from '../apiFront/getAll'

const Products = () => {

  const [data, setData] = useState('')

  const getData = async () => {
    const data = await getAll()
    setData(data)
  }

useEffect(() => {
getData()
}, [])


  return (
    <div>Products
      <h1>{data.name}</h1>
    </div>
  )
}

// export const getServerSideProps = context => {
//     console.log(context);
//     return {
//         props: {}
//     }
// }

export default Products