import { Menu } from './menu'
const menu = [
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Works',
    href: '/works'
  },
  {
    title: 'Contact',
    href: '/contact'
  },
]
export default () => {
  return (
    <>
      <header className='container'>
        <a href="/">
          <span>JS</span>
        </a>
        <Menu defaultItems={menu}></Menu>
      </header>
      <style jsx>
        {`
          .container{
            display: flex;
            align-items: center;
            background-color: white;
            justify-content: space-between;
            font-size: 20px;
            height: 8%;
            padding: 0 20px;
            box-shadow: 0px 1px 8px; 
          }
          @media screen and (max-width:700px){
            .container{
              margin-bottom: 20px;
              height: 50px;
            }
          }
        `}
      </style>
    </>

  )
}