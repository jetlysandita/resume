import { useState, useEffect } from "react"
interface List {
  defaultItems: {
    title: string
    description: string | React.ReactElement
  }[]
}
export default function List({ defaultItems }: List) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(defaultItems)
  }, [defaultItems])

  return (
    <>
      <div className='container'>
        <ul >

          {
            items.map((item, i) => {
              return (
                <li className='item'>
                  <span className='title'>
                    {item.title}
                  </span>
                  <br></br>
                  <span>
                    {item.description}
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <style jsx>
        {`
          .item{
            margin: 10px 0;
          }
          .title{
            font-weight: bold;
          }
          .container{
            display: flex;
            font-size: 16px;
          }
          .container a{
            padding-left:20px;
          }
        `}
      </style>
    </>

  )
}