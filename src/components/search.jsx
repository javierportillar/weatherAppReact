import React, { useRef } from 'react'

export const Search = ({setCity}) => {
    const inputCityRef = useRef(null);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setCity(inputCityRef.current.value);
        }
    }
    const handleSearch = () => {
        setCity(inputCityRef.current.value);
        console.log(inputCityRef.current.value);
      
    }

  return (
    <div className='search'>
        <input type="text" className='search-bar' placeholder='Ciudad a Buscar' ref={inputCityRef} onKeyDown={handleKeyDown}/>
        <button className="search-btn" onClick={handleSearch}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z">
                    </path>
                </svg>
            </button>
    </div>
  )
}
