import { Header } from "../header";

const Bodywrapper = (props) => {
  return(
    <div>
      <Header />
      <div style={{
        marginLeft: 120,
        marginRight: 120,
        // backgroundColor: 'pink'
      }}>
        {props.children}
      </div>
      <div style={{
        padding: '5rem'
      }}></div>
    </div>
  )
}

export {
  Bodywrapper
};
