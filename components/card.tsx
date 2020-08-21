interface Card {
  children: React.ReactNode
  rounded?: string
  height?: string
  width?: string
  alignSelf?: string
  margin?: string
  padding?: string
  minWidth?: string
  textAlign?: string
}
export default function Card({ textAlign, children, rounded, height, width, alignSelf, margin, padding, minWidth }: Card) {

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
              min-width: ${minWidth ?? '0px'};
              background-color: rgba(255, 255, 255, 0.5);
              height: ${height ?? '500px'};
              margin: ${ margin ?? '0'};
              padding: ${padding ?? '0'};
              border-radius: ${rounded ?? '5px'};
              align-self: ${alignSelf ?? 'auto'};
              box-shadow: 2px 2px 10px;
            }
            @media screen and (max-width:700px){
              .card{
                width: 100%;
                min-width: auto;
                animation: none;
                text-align:${textAlign ?? 'center'};
                padding: 0px;
                margin:10px 0px;
              }
            }
            
          `
        }
      </style>
    </>

  )
}
