import React, { CSSProperties } from "react";

const GenericCard = ({
  title,
  children,
  headerHeight = 46,
  style,
  header = true,
}: {
  title: string;
  children: React.ReactChild | React.ReactFragment;
  headerHeight?: number;
  style?: CSSProperties;
  header?: boolean;
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: 228,
        minHeight: 150,
        backgroundColor: "white",
        margin: 15,
        marginBottom: 0,

        borderRadius: 3,
        ...style,
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

            fontFamily: "NotoSans",

            userSelect: "none",

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
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GenericCard;
