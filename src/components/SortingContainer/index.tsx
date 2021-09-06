const SortingContainer = () => {
  return (
    <div
      style={{
        position: "relative",
        height: 58,
        width: 640,
        backgroundColor: "white",

        marginTop: 15,
        marginBottom: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      }}
    >
      <div
        style={{ width: 38, height: 38, backgroundColor: "gray", margin: 10 }}
      ></div>
      <div
        style={{ width: 38, height: 38, backgroundColor: "gray", margin: 10 }}
      ></div>
      <div
        style={{ width: 38, height: 38, backgroundColor: "gray", margin: 10 }}
      ></div>
      <div
        style={{ width: 38, height: 38, backgroundColor: "gray", margin: 10 }}
      ></div>
      <div
        style={{
          position: "absolute",
          right: 0,

          width: 38,
          height: 38,
          backgroundColor: "gray",
          margin: 10,
        }}
      ></div>
    </div>
  );
};

export default SortingContainer;
