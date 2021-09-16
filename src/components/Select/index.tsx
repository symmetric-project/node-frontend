import dynamic from "next/dynamic";

const Select = dynamic(() => import("./StaticSelect"), {
  ssr: false,
});

export default Select;
