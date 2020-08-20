
interface SideToSide {
  children: React.ReactNode
}
export default ({ children }: SideToSide) => {

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
            justify-content:space-evenly;
          }
          @media screen and (max-width:700px){
            .container{
              flex-direction: column;
              width: auto;
              height: auto;
            }
          }
        `}
      </style>
    </>

  )
}