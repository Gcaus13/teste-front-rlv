import React, { InputHTMLAttributes } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputSearch = (props: InputSearchProps) => {
  return (
    <div className="relative flex items-center w-[330px] h-[40px] px-4 bg-white">
      <Input
        {...props}
        type="text"
        placeholder="Buscar documentos"
        className="pr-10 bg-transparent text-sm text-neutral-600 placeholder:text-neutral-400"
      />
      <Search
        className="absolute right-9 text-neutral-400 w-5 h-5"
        aria-hidden="true"
      />
    </div>
  );
};

export default InputSearch;
