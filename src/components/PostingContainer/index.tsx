const PostingContainer = () => {
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ width: 38, height: 38, backgroundColor: "gray", margin: 10 }}
      ></div>
      <div
        style={{ width: 450, height: 38, backgroundColor: "gray", margin: 10 }}
      ></div>
      <div
        style={{ width: 38, height: 38, backgroundColor: "gray", margin: 10 }}
      ></div>
      <div
        style={{ width: 38, height: 38, backgroundColor: "gray", margin: 10 }}
      ></div>
    </div>
  );
};

export default PostingContainer;
