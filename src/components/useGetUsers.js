import React, { useEffect, useState } from 'react'

export const useGetUsers = (url) => {

const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
    setLoading(true)
    fetch(url)
    .then((response) => response.json())
    .then((datas) => setData(datas))
    .finally(()=> setLoading(false))
}, [])
console.log(data)
return {data, loading}
 
}
