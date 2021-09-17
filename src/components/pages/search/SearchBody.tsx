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

        borderWidth: 0,
        borderBottomWidth: selected ? 3 : 0,
        borderStyle: "solid",
        borderColor: COLORS.BLUE,
      }}
    >
      {children}
    </div>
  );
};

export default SearchBody;
