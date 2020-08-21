import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../components/header'))
const SideToSide = dynamic(() => import('../components/sideToSide'))
const Card = dynamic(() => import('../components/card'))
const List = dynamic(() => import('../components/list'))
const MetaTag = dynamic(() => import('../components/metaTag'))
const Group = dynamic(() => import('../components/group'))
const IconWithText = dynamic(() => import('../components/iconWithText'))

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

const skillGroup = [
  {
    children: <IconWithText title='React' image={String(require('../public/react.png'))} />
  },
  {
    children: <IconWithText title='Next js' image={String(require('../public/next.svg'))} />
  },
  {
    children: <IconWithText title='HTML' image={String(require('../public/html.png'))} />
  },
  {
    children: <IconWithText title='CSS' image={String(require('../public/css.jpeg'))} />
  },
  {
    children: <IconWithText title='Sass' image={String(require('../public/sass.webp'))} />
  },
  {
    children: <IconWithText title='Vue js' image={String(require('../public/vue.webp'))} />
  },
  {
    children: <IconWithText title='Node js' image={String(require('../public/node.webp'))} />
  },
  {
    children: <IconWithText title='Graphql' image={String(require('../public/graphql.png'))} />
  },
  {
    children: <IconWithText title='Elastic search' image={String(require('../public/elastic.webp'))} />
  },
  {
    children: <IconWithText title='Postgres' image={String(require('../public/postgres.webp'))} />
  },
  {
    children: <IconWithText title='Mysql' image={String(require('../public/mysql.webp'))} />
  },
  {
    children: <IconWithText title='Mongo Db' image={String(require('../public/mongodb.webp'))} />
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
            padding='0 20px'
            margin='0 10px'
            minWidth='200px'
            textAlign='left'
          >
            <h2 style={{ textAlign: 'center' }}>Academic History</h2>
            <List defaultItems={academicHistory} />
          </Card>
          <Card width='70%' height='80%' alignSelf='baseline' padding='0 20px' minWidth='500px'>
            <h2 >Skill</h2>
            <Group defaultItems={skillGroup} />
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
              .container{
                margin:0;
              }
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









