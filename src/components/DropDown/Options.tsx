import { FC } from "react";
import { OptionType } from "../../types/common.type";
import { Loader } from "../Loader/Loader";
import * as Styled from "./style";

interface IOptionsProps {
  options: OptionType[];
  onSelect: (value: string) => void;
  loader?: boolean;
}

const Options: FC<IOptionsProps> = ({
  options,
  onSelect,
  loader,
}): JSX.Element => {
  return loader ? (
    <Styled.Empty>
      <Loader styles={{width: "40px", margin: "-8px auto"}} />
    </Styled.Empty>
  ) : options.length ? (
    <Styled.Options>
      {options.map((option) => (
        <Styled.Option key={option.id} onClick={() => onSelect(option.id)}>
          {option.name}
        </Styled.Option>
      ))}
    </Styled.Options>
  ) : (
    <Styled.Empty>Nothing found</Styled.Empty>
  );
};

export default Options;
