import { Banner, Bodywrapper } from "../../components";
import { Carditem } from "./carditem";

const Index = () => {
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
        <Carditem />
      </div>
    </Bodywrapper>
  )
}

export default Index;
