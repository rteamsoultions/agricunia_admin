import React from 'react'

export const Loader = (props) => {
    return (
        <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 animate-spin text-indigo-600 text-opacity-100 " viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" 
              clip-rule="evenodd" />
            </svg>
        </div>
        

    )
}


