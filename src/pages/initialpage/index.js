import * as React from "react";
import { Banner, Bodywrapper } from "../../components";
import { CarListReady } from "../../services/apiv1";
import { Carditem } from "./carditem";

const Index = () => {
  const [listdatatosell, setlistdatatosell] = React.useState(null)

  React.useEffect(() => {
    fetchlist()
  },[])

  const fetchlist = async () => {
    const respdatas = await CarListReady()
    console.log(respdatas);
    setlistdatatosell(respdatas)
  }

  return(
    <Bodywrapper>
      <Banner />
      <div style={{padding: 15}}></div>
      <div style={{
        fontWeight: 'lighter',
        color: '#808080',
        backgroundColor: '#FFF1F1',
        padding: 20,
        fontSize: '12%',
        borderRadius: 8,
        borderColor: '#F0F0F0'
      }}>
        Info harga / nego lebih lanjut hubungi: 081210959995
      </div>
      <div style={{padding: 15}}></div>
      <div style={{
        padding: 10,
        fontSize: 20,
        borderColor: 'black',
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid'
      }}>
        #BarangReady
      </div>
      <div style={{padding: 15}}></div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center'
      }}>
        {listdatatosell != null && listdatatosell.statusmessage === 'succesful' && (
          listdatatosell.data.map((i,x) => (
            <React.Fragment key={x}>
              <Carditem title={i.kendaraan_sales_judul} img={i.kendaraan_gambar} />
            </React.Fragment>
          ))
        )}
      </div>
    </Bodywrapper>
  )
}

export default Index;
