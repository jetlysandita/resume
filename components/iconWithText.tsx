import { useState, useEffect } from "react"
interface IconWithText {
  title: string
  image: string
}
export default function IconWithText({ title, image }: IconWithText) {

  return (
    <>
      <div className='container'>
        <img src={image} alt={image} className='image' />
        <span>{title}</span>
      </div>
      <style jsx>{
        `
          .container{
            display:flex;
            flex-direction:column;
            width:110px;
            height:130px;
            align-items:center;
          }
          .image{
            width: 110px;
            height: 110px;
          }
        `
      }
      </style>
    </>

  )
}