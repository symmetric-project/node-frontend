import { COLORS } from "../../../const";

const SearchBody = ({
  children,
  selected,
}: {
  children: React.ReactChild;
  selected: boolean;
}) => {
  return (
    <div
      style={{
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",

        color: selected ? COLORS.BLACK : COLORS.GRAY_TEXT,
        fontWeight: 700,

        outlineWidth: 0,
        borderBottomWidth: selected ? 3 : 0,
        outlineStyle: "solid",
        outlineColor: COLORS.BLUE,
      }}
    >
      {children}
    </div>
  );
};

export default SearchBody;
