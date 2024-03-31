import React from "react";
import FobjIcon from "../../icons/fobjIcon";

const Loader: React.FC = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-20 h-20 border-8 text-inputs animate-spin border-inputs flex items-center justify-center border-t-secondary rounded-full">
        <FobjIcon color="#001F54" className="animate-pulse" size="40" />
      </div>
    </div>
  );
};

export default Loader;
