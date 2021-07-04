import React from 'react'

export const GifGridItem = ({url, title,id}) => {
   
    return (
        <div className="card animate__animated animate__backInDown">
            <p>{title}</p>
            <img src ={url} alt ={title}/>
        </div>
    )
}
