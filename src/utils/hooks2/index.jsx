//copie ok


import { useState, useEffect } from 'react'

 

// export function useFetch(url) {

// const [data, setData] = useState({})

// const [isLoading, setLoading] = useState(true)

// const [error, setError] = useState(false)

// useEffect(() => {

// if (!url) return setLoading(true)

// async function fetchData() {

// const response = await fetch(url)

// const data = await response.json()

// setData(data)

// setLoading(false)

// }

// setLoading(true)

// fetchData()

// }, [url])

 

// return { isLoading, data, error }

// }





















// import { useState, useEffect, useContext } from 'react'

// //fetch
export function useFetch(url) {
  const [data, setData] = useState({})
 const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {
        setError(true)
      } 
      finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
 // console.log("url est bien transmit ? :",url);
 return { isLoading, data, error}

}
