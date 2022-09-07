const Header = () => {
  return (
    <div>
      <div
        style={{
          fontSize: 12,
          fontWeight: "bold",
          color: "#A5A5A5",
          padding: 8,
        }}
      >
        © Lzr oto - 2022
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#DB3E53",
          padding: 8,
          paddingTop: 12,
          paddingBottom: 12,
          fontSize: 30,
          fontWeight: "bold",
          justifyContent: "space-between",
        }}
      >
        LZR OTO
      </div>
    </div>
  );
};

export { Header };
