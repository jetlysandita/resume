interface Card {
  children: React.ReactNode
  rounded?: string
  height?: string
  width?: string
  alignSelf?: string
  margin?: string
  animation?: boolean
  padding?: string
}
export default ({ children, rounded, height, width, alignSelf, margin, animation, padding }: Card) => {

  return (
    <>
      <div className='card'>
        {children}
      </div>
      <style jsx>
        {
          `
            .card{
              width: ${width ?? '500px'};
              background-color: rgba(255, 255, 255, 0.4);
              height: ${height ?? '500px'};
              margin: ${ margin ?? '0'};
              padding: ${padding ?? '0'};
              border-radius: ${rounded ?? '5px'};
              transform: translatey(0px);
              animation: float 6s ease-in-out infinite;
              align-self: ${alignSelf ?? 'auto'};
            }
            @media screen and (max-width:700px){
              .card{
                width: 100vw;
                animation: none;
                text-align:center;
                padding: 0px;
              }
            }
            @keyframes float {
              0% {
                box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                transform: translatey(0px);
              }
              50% {
                box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
                transform: translatey(${animation ? '-10px' : '0px'});
              }
              100% {
                box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                transform: translatey(0px);
              }
            }
          `
        }
      </style>
    </>

  )
}
