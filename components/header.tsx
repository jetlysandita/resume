import { Menu } from './menu'
const menu = [
  {
    title: 'Home',
    href: '/'
  },
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
export default function Header() {
  return (
    <>
      <header className='container'>
        <a href="/">
          <img src={require('../public/js.svg')} alt='logo' className='img' />
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
          .img{
            width: 35px;
            height: 35px;
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