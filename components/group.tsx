import { useState, useEffect } from "react"
interface Group {
  defaultItems: {
    children: React.ReactNode
  }[]
}
export default function Group({ defaultItems }: Group) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(defaultItems)
  }, [defaultItems])

  return (
    <div className='container'>
      {
        items.map((item, i) => {
          return <div key={i} className='item'>
            {item.children}
          </div>
        })
      }
      <style jsx>
        {
          `
            .container{
              display:flex;
              flex-wrap: wrap;
              justify-content:center;
            }
            .item{
              margin: 10px;
            }
          `
        }
      </style>
    </div>

  )
}