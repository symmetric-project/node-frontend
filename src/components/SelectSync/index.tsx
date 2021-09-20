import dynamic from "next/dynamic";

const SelectSync = dynamic(() => import("./StaticSelect"), {
  ssr: false,
});

export default SelectSync;
