import React from "react";
import Image from "next/image";
import SVG from "react-inlinesvg";

const GenericCard = ({
  title,
  children,
  headerHeight = 46,
  svgSrc,
  imageSrc,
  header = true,
}: {
  title: string;
  children: React.ReactChild | React.ReactFragment;
  headerHeight?: number;
  svgSrc?: string;
  imageSrc?: string;
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
      {header && svgSrc ? (
        <SVG
          src={svgSrc}
          width={310}
          height={100}
          cursor="pointer"
          title={"Avatar"}
          style={{ marginLeft: 20, marginRight: 10 }}
        />
      ) : null}
      {header && imageSrc ? (
        <div style={{ position: "relative", width: 310, height: headerHeight }}>
          <Image
            height={headerHeight}
            width={310}
            layout="fill"
            objectPosition="50% 50%"
            src={imageSrc as string}
          />
          asd
        </div>
      ) : null}

      {header && !svgSrc && !imageSrc ? (
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
