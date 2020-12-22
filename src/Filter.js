import React from 'react'

export default function Filter(props) {
    return (
        <div className='filter'>
            <form className='filter__print_type'>
                <label>Print Type:</label>
                <select id='print_type' name='print_type' onChange={e => props.onChangePrint(e.target.value)}>
                    <option value=''>All</option>
                    <option value='partial'>Partial Preview</option>
                    <option value='full'>Full Text Viewable</option>
                </select>
            </form>
            <form className='filter__book_type'>
                <label>Book Type:</label>
                <select id='book_type' name='book_type' onChange={e => props.onChangeBook(e.target.value)}>
                    <option value=''>All</option>
                    <option value='free-ebooks'>Free eBooks</option>
                    <option value='paid-ebooks'>Paid eBooks</option>
                    <option value='ebooks'>eBooks</option>
                </select>
            </form>
        </div>
    )
}
