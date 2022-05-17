import React from "react";
import '../style-sheets/blogCard.css'

function BlogCard(props) {
    return(
        <article className='blogCard'>
            <figure><img alt='ldnjdnlnk'  src={ props.src }/></figure>
            <p className='blogCardAuthor'>{ props.author } <span className="blogCardDate"> - { props.date }</span></p>
            <h2 className='blogCardTitle'>{ props.title }</h2>
            <p className='blogCardText'>{ props.text }</p>
            
        </article>
    )
}

export { BlogCard }