import { carditemmodel } from "./model"

const Carditem = ({img,title,price}) => {
  const data = new carditemmodel(
    "https://i.ibb.co/P68znF8/Screen-Shot-2022-08-10-at-17-33-55.png",
    "HRV 1,5E CVT matic warna abu2 metalik thn 2017",
    "081210959995"
  )
  
  const labeltitle = (params) => {
    return(
      <div style={{
        fontWeight: 'lighter',
        fontSize: 12
      }}>{params}</div>
    )
  }

  const holderimage = (params) => {
    return(
      <img src={params} 
      alt="Girl in a jacket" 
      style={{
        width: '100%',
        height: '8rem',
        objectFit: 'contain'
      }}
      />
    )
  }

  const holderprice = (params) => {
    return(
      <div style={{
        bottom: 0,
        position: 'absolute',
        paddingBottom: 5
      }}>
        <div style={{
          fontSize: 12,
          fontWeight: 'bold',
        }}>Nego</div>
        <div style={{
          fontWeight: 'bold'
        }}>{params}</div>
      </div>
    )
  }

  return(
    <div style={{
      width: '12rem',
      height: '15rem',
      borderWidth: 1,
      borderColor: '#F0F0F0',
      borderStyle: 'solid',
      borderRadius: 8,
      overflow: 'hidden',
      position: 'relative'
    }}>
      {holderimage(data.img)}
      <div style={{
        padding: 5,
      }}>
        {labeltitle(data.title)}
        {holderprice(data.price)}
      </div>
    </div>
  )
}

export {
  Carditem
};
