import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('mock')
  const toggleTheme = () => {
    setTheme(theme === 'mock' ? 'api' : 'mock')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} 
    </ThemeContext.Provider>
  )
}



// import { createContext, useState } from "react"



// export const MockContext = createContext()


// export const MockProvider = ({ children }) => {
//     //Mock API ???
//     const [isMock, setIsMock] = useState(false)
//     const toggleMock = () => {
//         setIsMock(!isMock)
//     }
 

//     return (
//         <MockContext.Provider value={{ isMock, toggleMock }}>
//             {children}
//         </MockContext.Provider>
//     )
// }















