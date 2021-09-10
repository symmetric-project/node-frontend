const GenericCard = ({
  title,
  content,
  headerHeight = 46,
}: {
  title: string;
  content: string;
  headerHeight?: number;
}) => {
  return (
    <div
      style={{
        width: 310,
        minHeight: 150,
        backgroundColor: "white",
        margin: 15,

        borderRadius: 3,
      }}
    >
      <div
        style={{
          top: 0,
          width: "100%",
          height: headerHeight,
          backgroundColor: "#0079d3",

          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,

          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",

          color: "white",
          fontWeight: 700,
          fontSize: 14,
          lineHeight: 18,

          padding: 10,
        }}
      >
        {title}
      </div>
      <div
        style={{
          height: "100%",
          padding: 15,
          fontFamily: "NotoSans",
          lineHeight: "21px",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default GenericCard;
