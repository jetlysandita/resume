import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../components/header'))
const SideToSide = dynamic(() => import('../components/sideToSide'))
const Card = dynamic(() => import('../components/card'))
const List = dynamic(() => import('../components/list'))
const MetaTag = dynamic(() => import('../components/metaTag'))

const academicHistory = [
  {
    title: 'Hactiv8 Indonesia',
    description: <>
      Nov 2019 - May 2020
      <br></br>
      fullstack Javascript
    </>
  },
  {
    title: 'Bunda Mulia University',
    description: <>
      Aug 2014 - May 2018
      <br></br>
      Bachelor Degree of informatics Engineering
      <br></br>
      GPA 3.42
    </>
  },

]
export default function Home() {
  return (
    <>
      <MetaTag title='About Me - Jetly Sandita' />
      <Header />
      <div className='container'>
        <h1>About Me</h1>
        <SideToSide justifyContent='space-between'>
          <Card
            width='22%'
            height='90%'
            alignSelf='baseline'
            padding='0 10px'
          >
            <h2>Academic History</h2>
            <List defaultItems={academicHistory} />
          </Card>
          <Card width='60%' height='80%' alignSelf='baseline'>
            <h2 >Skill</h2>

          </Card>

        </SideToSide>
      </div>
      <style jsx>
        {
          `
            .container{
              margin: 0 50px;
            }
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









