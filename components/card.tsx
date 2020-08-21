interface Card {
  children: React.ReactNode
  rounded?: string
  height?: string
  width?: string
  alignSelf?: string
  margin?: string
  padding?: string
}
export default function Card({ children, rounded, height, width, alignSelf, margin, padding }: Card) {

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
            
          `
        }
      </style>
    </>

  )
}
