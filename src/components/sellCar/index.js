import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { sampledata } from "../../sampledata";
import NumberFormat from "react-number-format";

export const SellCar = () => {
  const [car] = useState(sampledata);
  const [name, setName] = useState([]);
  const [detail, setDetail] = useState([]);
  const [year, setYear] = useState([]);
  const [typeCar, setTypeCar] = useState([]);
  const [typeMachine, setTypeMachine] = useState([]);
  const [typeTransmission, setTypeTransmission] = useState([]);
  const [price, setPrice] = useState([]);

  const handleMerk = (e) => {
    const value = e.target.value;
    const filtered = car.filter((car) => {
      return car.merek === value;
    });

    setName(filtered[0].detail);
  };

  const handleName = (e) => {
    const value = e.target.value;
    const filtered = name.filter((name) => {
      return name.detail_merek === value;
    });

    setDetail(filtered[0].detail_spek);

    const yearList = filtered[0].detail_spek.map((v) => {
      return v.tahun;
    });

    setYear([...new Set(yearList)]);
  };

  const handleYear = (e) => {
    const value = e.target.value;
    const filltered2 = detail.filter((detail) => {
      return detail.tahun === value;
    });

    setDetail(filltered2);

    const typeCarList = filltered2.map((v) => {
      return v.tipe;
    });

    setTypeCar([...new Set(typeCarList)]);
  };

  const handleTypeCar = (e) => {
    const value = e.target.value;
    const filltered2 = detail.filter((detail) => {
      return detail.tipe === value;
    });

    setDetail(filltered2);

    const typeMachineList = filltered2.map((v) => {
      return v.mesin;
    });

    setTypeMachine([...new Set(typeMachineList)]);
  };

  const handleTypeMachine = (e) => {
    const value = e.target.value;
    const filltered2 = detail.filter((detail) => {
      return detail.mesin === value;
    });

    setDetail(filltered2);

    const typeTransmissionList = filltered2.map((v) => {
      return v.transmisi;
    });

    setTypeTransmission([...new Set(typeTransmissionList)]);
  };

  const handleTypeTransmission = (e) => {
    const value = e.target.value;
    const filltered2 = detail.filter((detail) => {
      return detail.transmisi === value;
    });

    setDetail(filltered2);

    const priceList = filltered2.map((v) => {
      return v.harga;
    });

    setPrice(priceList);
  };

  return (
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
          <Select
            // value={inputmerekmbl}
            onChange={handleMerk}
            label="platMobil"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {car.map((i, x) => (
              <MenuItem key={x} value={i.merek}>
                {i.merek}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 194 }}>
          <InputLabel>Detail Mobil</InputLabel>
          <Select
            // value={inputdetailmbl}
            onChange={handleName}
            label="platMobil"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {name.map((i, x) => (
              <MenuItem key={x} value={i.detail_merek}>
                {i.detail_merek}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 194 }}>
          <InputLabel>Tahun Mobil</InputLabel>
          <Select
            // value={inputtahunmbl}
            onChange={handleYear}
            label="platMobil"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {year.map((i, x) => (
              <MenuItem key={x} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 194 }}>
          <InputLabel>Tipe Mobil</InputLabel>
          <Select
            // value={inputtipembl}
            onChange={handleTypeCar}
            label="platMobil"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {typeCar.map((i, x) => (
              <MenuItem key={x} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 194 }}>
          <InputLabel>Jenis Mesin</InputLabel>
          <Select
            // value={inputmesinmbl}
            onChange={handleTypeMachine}
            label="platMobil"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {typeMachine.map((i, x) => (
              <MenuItem key={x} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 194 }}>
          <InputLabel>Transmisi</InputLabel>
          <Select
            // value={inputtransmisimbl}
            onChange={handleTypeTransmission}
            label="platMobil"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {typeTransmission.map((i, x) => (
              <MenuItem key={x} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div
          style={{
            fontWeight: "bold",
            marginTop: "1.5rem",
          }}
        >
          Estimasi Harga :
        </div>
        {price.length !== 0 && (
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            <NumberFormat displayType={"text"} thousandSeparator={true} prefix={"Rp."} value={price.reduce((a, b) => a + b, 0) / price.length} />
          </div>
        )}
      </div>
    </div>
  );
};
