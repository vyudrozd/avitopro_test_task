import React from 'react';

export default function Image({
    src,
    className
}) {
    return(
        <img className={className} src={src}  alt={"image"}/>
    )
}