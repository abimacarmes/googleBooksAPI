import React from 'react'

export default function Search(props) {
    return (
        <form className='search' onSubmit={props.onSubmit}>
            <label>Search: </label> 
            <input type='text' name='search' placeholder='i.e. Agatha Christie' onChange={props.onChange}></input>
            <button type='submit'>Search</button>
        </form>
    )
}
