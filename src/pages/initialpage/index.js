import React, { useState } from "react";
import { Banner, Bodywrapper, SellCar } from "../../components";
import { CarListReady, findmobildetail } from "../../services/apiv1";
import { Carditem } from "./carditem";
import { Oval } from "react-loader-spinner";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Index = () => {
  const [listdatatosell, setlistdatatosell] = React.useState(null);
  const [filteredyeardt, setfilteredyeardt] = React.useState(null);
  const [merekmobildt, setmerekmobildt] = React.useState(null);
  const [hargamobildt, sethargamobildt] = React.useState(null);
  const [warnamobildt, setwarnamobildt] = useState(null);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    fetchlist();
  }, []);

  const fetchlist = async () => {
    setLoading(true);
    const respdatas = await CarListReady();
    // console.log(respdatas);
    setlistdatatosell(respdatas);
    setLoading(false);
  };

  const setfilteredyear = (data) => {
    // console.log("setfilteredyear", data.target.value);
    setfilteredyeardt(data.target.value);
  };

  const setmerekmobil = (data) => {
    // console.log("setmerekmobil", data.target.value);
    setmerekmobildt(data.target.value);
  };

  const sethargamobil = (data) => {
    // console.log("sethargamobil", data.target.value);
    sethargamobildt(data.target.value);
  };

  const setwarnamobil = (data) => {
    // console.log("setwarnamobil", data.target.value);
    setwarnamobildt(data.target.value);
  };

  const carimobil = async () => {
    const reqbody = {
      kendaraan_tahun: filteredyeardt === null ? "" : filteredyeardt,
      kendaraan_harga: hargamobildt === null ? "0" : hargamobildt,
      kendaraan_merk: merekmobildt === null ? "" : merekmobildt,
      kendaraan_warna: warnamobildt === null ? "" : warnamobildt,
    };
    // console.log("carimobil", reqbody);
    const x = await findmobildetail(reqbody);
    if (x.status === 200) {
      setlistdatatosell(x);
    } else {
      setlistdatatosell(null);
    }
    // console.log("carimobil", x);
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
        Info harga / kredit lebih lanjut hubungi: 081210959995
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
              <Carditem title={i.kendaraan_sales_judul} img={i.kendaraan_gambar} />
            </React.Fragment>
          ))}
      </div>

      <SellCar />
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
