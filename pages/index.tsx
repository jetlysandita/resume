import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../components/header'))
const SideToSide = dynamic(() => import('../components/sideToSide'))
const Card = dynamic(() => import('../components/card'))
const MetaTag = dynamic(() => import('../components/metaTag'))

export default function Home() {
  return (
    <>
      <MetaTag title='Programmer - Jetly Sandita' />
      <Header />
      <SideToSide>
        <Card
          width='22%'
          height='90%'
        >
          <img src={require('../public/Jetly Sandita.jpg?resize&size=600')} alt='avatar' className='img' />
        </Card>
        <Card width='60%' height='80%' padding='20px'>
          <h1 >Jetly Sandita</h1>
          <p className="description">
            I'm a programmer based in Jakarta, Indonesia. I've been in business since 2018.
            <br></br>
            <br></br>
            I started as a fullstack developer and now I'm more interested in frontend developer.
            <br></br>
            <br></br>
            Why ?
            <br></br>
            because I feel I have a deficiency in the frontend and I feel there are more jobs such as creative design, animation, font and color selection, response design.
            <br></br>
            I try to make up for these shortcomings.
            <br></br>
            <br></br>
            I like to learn something i don't know and have satisfaction after understanding it quickly. I also like to share experiences
          </p>
        </Card>

      </SideToSide>
      <style jsx>
        {
          `
            .img{
              height: 100%;
              width: 100%;
            }
            .description{
              font-size: 20px;
            }
            @media screen and (max-width:700px){
              .description{
                text-align: left;
                margin: 0 20px;
              }
              .img{
                height: 300px;
                width: 50%;
              }
            }
          `
        }
      </style>
    </>
  )
}

export async function getStaticProps() {

  return {
    props: {},
    revalidate: 360
  }
}









