const NodeHeader = () => {
  return (
    <div
      style={{
        position: "relative",
        height: 150,
        width: "100%",
        backgroundColor: "blue",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: 75,
          width: "100%",
          backgroundColor: "gray",
          bottom: 0,

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Node Name Hub</div>
        <div>r/node</div>
      </div>
    </div>
  );
};

export default NodeHeader;
