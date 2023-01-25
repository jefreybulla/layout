import React from 'react'

export default function Header(){
  return(
    <header className='flex justify-between align-middle p-4 bg-green-700 text-white w-100'>
      <h1>
        <a href="/">
          <h2>Jef's kitchen</h2>
        </a>
      </h1>
    </header>
  )
}