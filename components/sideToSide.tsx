
interface SideToSide {
  children: React.ReactNode
  justifyContent?: string
}
export default function SideToSide({ children, justifyContent }: SideToSide) {
  if (!justifyContent) {
    justifyContent = 'space-evenly'
  }
  return (
    <>
      <div className='container' >
        {children}
      </div>
      <style jsx>
        {`
          .container{
            display: flex;
            min-height: 92%;

            align-items:center;
            justify-content:${ justifyContent};
          }
          @media screen and (max-width:700px){
            .container{
              flex-direction: column;
              width: auto;
              padding: 0 20px;
              height: auto;
            }
          }
        `}
      </style>
    </>

  )
}