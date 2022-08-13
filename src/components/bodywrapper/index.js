import { useEffect } from "react";
import { useWindowSize } from "../../utils";
import { Header } from "../header";

const Bodywrapper = (props) => {
  const size = useWindowSize();

  return(
    <div>
      <Header />
      <div style={size.width < 600 ? {
        padding: 10
      } : styling.stylebodywrapper}>
        {props.children}
      </div>
      <div style={{
        padding: '5rem'
      }}></div>
    </div>
  )
}

const styling = {
  stylebodywrapper: {
    marginLeft: 120,
    marginRight: 120
  }
}

export {
  Bodywrapper
};
