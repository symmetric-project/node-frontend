const StickyHeader = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: 38,
        backgroundColor: "white",

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        padding: 5,

        zIndex: 10,
      }}
    >
      <div style={{ width: 30, height: 30, backgroundColor: "gray" }}></div>
    </div>
  );
};

export default StickyHeader;
