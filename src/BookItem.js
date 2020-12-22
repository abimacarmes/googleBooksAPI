import React from 'react'

export default function BookItem(props) {
    const item = props.item.volumeInfo
    const title = item.title
    const author = item.authors
    const image = item.imageLinks.smallThumbnail
    const description = item.description

    console.log(item);

    return (
        <div className='bookItem group'>
            <div className='image'>
                <img src={image} alt={title}></img>
            </div>
            <div className='info'>
                <h3>{title}</h3>
                <p>{author}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
