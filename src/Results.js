import React from 'react'
import BookItem from './BookItem'

export default function Results(props) {
    const searchResults = props.searchItems;
    console.log(searchResults)

    const results = searchResults.map((item) => <BookItem item={item}/>)
    
    return (
        <div className='results'>
            {results}
        </div>
    )
}
