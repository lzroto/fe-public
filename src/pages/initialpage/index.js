import * as React from "react";
import { Banner, Bodywrapper } from "../../components";
import { CarListReady, findmobildetail } from "../../services/apiv1";
import { Carditem } from "./carditem";

const Index = () => {
  const [listdatatosell, setlistdatatosell] = React.useState(null)
  const [filteredyeardt, setfilteredyeardt] = React.useState(null)
  const [merekmobildt, setmerekmobildt] = React.useState(null)
  const [hargamobildt, sethargamobildt] = React.useState(null)

  React.useEffect(() => {
    fetchlist()
  },[])

  const fetchlist = async () => {
    const respdatas = await CarListReady()
    console.log(respdatas);
    setlistdatatosell(respdatas)
  }

  const setfilteredyear = (data) => {
    console.log('setfilteredyear',data.target.value);
    setfilteredyeardt(data.target.value)
  }

  const setmerekmobil = (data) => {
    console.log('setmerekmobil',data.target.value);
    setmerekmobildt(data.target.value)
  }

  const sethargamobil = (data) => {
    console.log('sethargamobil',data.target.value);
    sethargamobildt(data.target.value)
  }

  const carimobil = async () => {
    const reqbody = {
      kendaraan_tahun: filteredyeardt === null ? '' : filteredyeardt,
      kendaraan_harga: hargamobildt === null ? '0' : hargamobildt,
      kendaraan_merk: merekmobildt === null ? '' : merekmobildt
    }
    console.log('carimobil',reqbody);
    const x = await findmobildetail(reqbody)
    if (x.status === 200) {
      setlistdatatosell(x)
    } else {
      setlistdatatosell(null)
    }
    console.log('carimobil',x);
  }

  const navigatingfunc = () => {
    
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
      <div onClick={() => navigatingfunc()} style={{
        fontWeight: 'lighter',
        color: '#808080',
        backgroundColor: '#c9ffe2',
        padding: 20,
        fontSize: '12%',
        borderRadius: 8,
        borderColor: '#F0F0F0'
      }}>
        Mau jual mobil ? klik disini aja!
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
      <div>
        <div>Filter by</div>
        <div>
          <select name="cars" id="cars" defaultValue='' onChange={(val) => setfilteredyear(val)}>
            <option disabled value={''}>Tahun</option>
            {[...Array(new Date().getFullYear())].map((x, i) =>
              i > 2010 && <option key={i} value={i+1}>{i+1}</option>
            ).reverse()}
          </select>
          <input type={'search'} onChange={(val) => setmerekmobil(val)} placeholder={'Merek mobil'} />
          <input type={'search'} onChange={(val) => sethargamobil(val)} placeholder={'Harga'} />
        </div>
        <button type={'button'} onClick={() => carimobil()}>cari</button>
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
