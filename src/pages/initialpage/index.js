import React, { useState, useStyles, useEffect, useRef } from "react";
import { Banner, Bodywrapper } from "../../components";
import { CarListReady, findmobildetail } from "../../services/apiv1";
import { Carditem } from "./carditem";
import { Oval } from "react-loader-spinner";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { sampledata } from "../../sampledata";

const Index = () => {
  const [listdatatosell, setlistdatatosell] = React.useState(null);
  const [filteredyeardt, setfilteredyeardt] = React.useState(null);
  const [merekmobildt, setmerekmobildt] = React.useState(null);
  const [hargamobildt, sethargamobildt] = React.useState(null);
  const [warnamobildt, setwarnamobildt] = useState(null);
  const [inputmerekmbl, setinputmerekmbl] = useState("");
  const [inputdetailmbl, setinputdetailmbl] = useState("");
  const [inputtahunmbl, setinputtahunmbl] = useState("");
  const [inputtipembl, setinputtipembl] = useState("");
  const [inputmesinmbl, setinputmesinmbl] = useState("");
  const [inputtransmisimbl, setinputtransmisimbl] = useState("");
  const [loading, setLoading] = useState(false);

  const Sampledata = { sampledata };
  // console.log(sampledata[0].detail[0].detail_merek);

  const detail_merek_toyota = sampledata[0].detail.map((detail_merek) => detail_merek);
  const detail_merek_honda = sampledata[1].detail.map((detail_merek) => detail_merek);
  const detail_merek_mitsubishi = sampledata[2].detail.map((detail_merek) => detail_merek);
  const detail_spek_toyota_agya = detail_merek_toyota[0].detail_spek.map((spek) => spek);
  const detail_spek_toyota_avanza = detail_merek_toyota[1].detail_spek.map((spek) => spek);
  const detail_spek_toyota_rush = detail_merek_toyota[2].detail_spek.map((spek) => spek);
  const detail_spek_honda_brio = detail_merek_honda[0].detail_spek.map((spek) => spek);
  const detail_spek_honda_brv = detail_merek_honda[1].detail_spek.map((spek) => spek);
  const detail_spek_honda_hrv = detail_merek_honda[2].detail_spek.map((spek) => spek);
  const detail_spek_mitsubishi_xpander = detail_merek_mitsubishi[0].detail_spek.map((spek) => spek);
  const detail_spek_mitsubishi_outlander = detail_merek_mitsubishi[1].detail_spek.map((spek) => spek);
  const detail_spek_mitsubishi_pajero = detail_merek_mitsubishi[2].detail_spek.map((spek) => spek);

  const detail_merek = [...detail_merek_toyota, ...detail_merek_honda, ...detail_merek_mitsubishi];
  const detail_spek_toyota = [...detail_spek_toyota_agya, ...detail_spek_toyota_avanza, ...detail_spek_toyota_rush];
  const detail_spek_honda = [...detail_spek_honda_brio, ...detail_spek_honda_brv, ...detail_spek_honda_hrv];
  const detail_spek_mitsubishi = [...detail_spek_mitsubishi_xpander, ...detail_spek_mitsubishi_outlander, ...detail_spek_mitsubishi_pajero];
  const detail_spek = [...detail_spek_toyota, ...detail_spek_honda, ...detail_spek_mitsubishi];
  // console.log(detail_spek);

  const setinputmerek = (event) => {
    console.log("setinputmerek", event.target.value);
    setinputmerekmbl(event.target.value);
  };

  const setinputdetail = (event) => {
    console.log("setinputdetail", event.target.value);
    setinputdetailmbl(event.target.value);
  };

  const setinputtahun = (event) => {
    console.log("setinputtahun", event.target.value);
    setinputtahunmbl(event.target.value);
  };

  const setinputtipe = (event) => {
    console.log("setinputtipe", event.target.value);
    setinputtipembl(event.target.value);
  };

  const setinputmesin = (event) => {
    console.log("setinputmesin", event.target.value);
    setinputmesinmbl(event.target.value);
  };

  const setinputtransmisi = (event) => {
    console.log("setinputtransmisi", event.target.value);
    setinputtransmisimbl(event.target.value);
  };

  // React.useEffect(() => {
  //   fetchlist();
  // }, []);

  const fetchlist = async () => {
    setLoading(true);
    const respdatas = await CarListReady();
    console.log(respdatas);
    setlistdatatosell(respdatas);
    setLoading(false);
  };

  const setfilteredyear = (data) => {
    console.log("setfilteredyear", data.target.value);
    setfilteredyeardt(data.target.value);
  };

  const setmerekmobil = (data) => {
    console.log("setmerekmobil", data.target.value);
    setmerekmobildt(data.target.value);
  };

  const sethargamobil = (data) => {
    console.log("sethargamobil", data.target.value);
    sethargamobildt(data.target.value);
  };

  const setwarnamobil = (data) => {
    console.log("setwarnamobil", data.target.value);
    setwarnamobildt(data.target.value);
  };

  const carimobil = async () => {
    const reqbody = {
      kendaraan_tahun: filteredyeardt === null ? "" : filteredyeardt,
      kendaraan_harga: hargamobildt === null ? "0" : hargamobildt,
      kendaraan_merk: merekmobildt === null ? "" : merekmobildt,
      kendaraan_warna: warnamobildt === null ? "" : warnamobildt,
    };
    console.log("carimobil", reqbody);
    const x = await findmobildetail(reqbody);
    if (x.status === 200) {
      setlistdatatosell(x);
    } else {
      setlistdatatosell(null);
    }
    console.log("carimobil", x);
  };

  const cekharga = async () => {
    console.log("Tampilkan Harga");
  };

  if (loading) return <Oval height={80} width={80} color="#DB3E53" wrapperStyle={styling.loading} wrapperClass="" visible={true} ariaLabel="oval-loading" secondaryColor="white" strokeWidth={2} strokeWidthSecondary={2} />;

  return (
    <Bodywrapper>
      <Banner />
      <div style={{ padding: 15 }}></div>
      <div
        style={{
          fontWeight: "lighter",
          color: "#808080",
          backgroundColor: "#FFF1F1",
          padding: 20,
          fontSize: "1rem",
          borderRadius: 8,
          borderColor: "#F0F0F0",
        }}
      >
        Untuk nego dan kredit lebih lanjut hubungi: 081210959995
      </div>
      <div style={{ padding: 15 }}></div>
      <div
        style={{
          padding: 10,
          fontSize: 20,
          borderColor: "black",
          borderRadius: 8,
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          Cari Berdasarkan :
          <FormControl variant="standard" sx={{ minWidth: 194 }}>
            <InputLabel>Tahun Mobil</InputLabel>
            <Select size="small" name="cars" id="cars" defaultValue="" onChange={(val) => setfilteredyear(val)}>
              <MenuItem value={""}>Tahun</MenuItem>
              {[...Array(new Date().getFullYear())]
                .map(
                  (x, i) =>
                    i > 2010 && (
                      <MenuItem key={i} value={i + 1}>
                        {i + 1}
                      </MenuItem>
                    )
                )
                .reverse()}
            </Select>
          </FormControl>
          <TextField type={"search"} onChange={(val) => setmerekmobil(val)} size="small" variant="standard" label="Merek Mobil" />
          <TextField type={"search"} onChange={(val) => setwarnamobil(val)} size="small" variant="standard" label="Warna Mobil" />
          <Button type={"button"} onClick={() => carimobil()} variant="outlined">
            cari
          </Button>
        </div>
      </div>
      <div style={{ padding: 15 }}></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {listdatatosell != null &&
          listdatatosell.statusmessage === "succesful" &&
          listdatatosell.data.map((i, x) => (
            <React.Fragment key={x}>
              <Carditem title={i.kendaraan_sales_judul} img={i.kendaraan_gambar} price={i.kendaraan_harga} />
            </React.Fragment>
          ))}
      </div>
      <div style={{ padding: 15 }}></div>
      <div
        style={{
          border: "1px solid black",
          // backgroundColor: "#DB3E53",
          borderRadius: 8,
          textAlign: "center",
          fontSize: 25,
          marginTop: "2rem",
        }}
      >
        INGIN JUAL MOBILMU? CEK HARGA DISINI GRATIS!!
        <div
          style={{
            marginTop: "1rem",
            fontWeight: "lighter",
          }}
        >
          Harap Masukkan Data Mobilmu Dibawah Sini
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "4rem",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <FormControl variant="standard" sx={{ minWidth: 194 }}>
            <InputLabel>Merek Mobil</InputLabel>
            <Select value={inputmerekmbl} onChange={(value) => setinputmerek(value)} label="platMobil">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {sampledata.map((i, x) => (
                <MenuItem key={x} value={i}>
                  {i.merek}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ minWidth: 194 }}>
            <InputLabel>Detail Mobil</InputLabel>
            <Select value={inputdetailmbl} onChange={(value) => setinputdetail(value)} label="platMobil">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {detail_merek.map((i, x) => (
                <MenuItem key={x} value={i}>
                  {i.detail_merek}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ minWidth: 194 }}>
            <InputLabel>Tahun Mobil</InputLabel>
            <Select value={inputtahunmbl} onChange={(value) => setinputtahun(value)} label="platMobil">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {detail_spek.map((i, x) => (
                <MenuItem key={x} value={i}>
                  {i.tahun}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ minWidth: 194 }}>
            <InputLabel>Tipe Mobil</InputLabel>
            <Select value={inputtipembl} onChange={(value) => setinputtipe(value)} label="platMobil">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {detail_spek.map((i, x) => (
                <MenuItem key={x} value={i}>
                  {i.tipe}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ minWidth: 194 }}>
            <InputLabel>Jenis Mesin</InputLabel>
            <Select value={inputmesinmbl} onChange={(value) => setinputmesin(value)} label="platMobil">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {detail_spek.map((i, x) => (
                <MenuItem key={x} value={i}>
                  {i.mesin}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ minWidth: 194 }}>
            <InputLabel>Transmisi</InputLabel>
            <Select value={inputtransmisimbl} onChange={(value) => setinputtransmisi(value)} label="platMobil">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {detail_spek.map((i, x) => (
                <MenuItem key={x} value={i}>
                  {i.transmisi}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div
            style={{
              marginTop: "3rem",
            }}
          >
            <Button type={"button"} onClick={() => cekharga()} variant="contained" size="large">
              Cek Harga
            </Button>
          </div>
        </div>
      </div>
    </Bodywrapper>
  );
};

const styling = {
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  },
};

export default Index;
