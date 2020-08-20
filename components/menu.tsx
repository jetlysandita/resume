import { useState, useEffect } from "react"
interface Menu {
  defaultItems: {
    title: string
    href: string
  }[]
}
export const Menu = ({ defaultItems }: Menu) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(defaultItems)
  }, [defaultItems])
  return (
    <>
      <div className='container'>
        {
          items.map((item, i) => {
            return (
              <a href={item.href} key={i}>
                <span>{item.title}</span>
              </a>
            )
          })
        }
      </div>
      <style jsx>
        {`
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