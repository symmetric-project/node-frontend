const NodeHeader = () => {
  return (
    <div
      style={{
        position: "relative",
        height: 150,
        width: "100%",
        backgroundColor: "rgb(51, 168, 255)",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: 75,
          width: "100%",
          backgroundColor: "white",
          bottom: 0,

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Node Name</div>
        <div>r/node</div>
      </div>
    </div>
  );
};

export default NodeHeader;
