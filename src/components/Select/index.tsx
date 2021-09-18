import dynamic from "next/dynamic";

const Select = dynamic(() => import("./DynamicSelect"), {
  ssr: false,
});

export default Select;
