import React from "react";

const GenericCard = ({
  title,
  children,
  headerHeight = 46,
  header = true,
}: {
  title: string;
  children: React.ReactChild | React.ReactFragment;
  headerHeight?: number;
  header?: boolean;
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: 310,
        minHeight: 150,
        backgroundColor: "white",
        margin: 20,

        borderRadius: 3,
      }}
    >
      {header ? (
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

            fontFamily: "NotoSans",

            padding: 15,
          }}
        >
          {title}
        </div>
      ) : null}

      <div
        style={{
          height: "100%",
          padding: 15,
          fontFamily: "NotoSans",
          lineHeight: "21px",

          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GenericCard;
