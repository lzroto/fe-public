import { useWindowSize } from "../../utils";
import { carditemmodel } from "./model";

const Carditem = ({ img, title, phone }) => {
  const size = useWindowSize();

  const data = new carditemmodel(
    img === undefined
      ? "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349"
      : img,
    title === undefined ? "asdasd" : title,
    phone === undefined ? "081210959995" : phone
  );

  const labeltitle = (params) => {
    return (
      <div
        style={{
          fontWeight: "normal",
          fontSize: 14,
        }}
      >
        {params}
      </div>
    );
  };

  const holderimage = (params) => {
    return (
      <img
        src={params}
        alt="image"
        style={{
          width: "100%",
          height: size.width < 450 ? "12rem" : "8rem",
          objectFit: "cover",
        }}
      />
    );
  };

  const holderprice = (params) => {
    return (
      <div
        style={{
          bottom: 0,
          position: "absolute",
          paddingBottom: 5,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          Nego
        </div>
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          {params}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: size.width < 450 ? "100%" : "12rem",
        height: size.width < 450 ? "20rem" : "15rem",
        borderWidth: 1,
        borderColor: "#F0F0F0",
        borderStyle: "solid",
        borderRadius: 8,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {holderimage(data.img)}
      <div
        style={{
          padding: 5,
        }}
      >
        {labeltitle(data.title)}
        {holderprice(data.phone)}
      </div>
    </div>
  );
};

export { Carditem };
