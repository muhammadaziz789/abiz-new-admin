import { SearchIcon } from "../../../IconPicker/svg";

const CSearchInput = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-3">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Izlash..."
        className="w-[250px] bg-blackCommon h-[40px] rounded-baseRadius outline-none pl-10 pr-5 border border-grayBase placeholder-gray"
      />
    </div>
  );
};

export default CSearchInput;
