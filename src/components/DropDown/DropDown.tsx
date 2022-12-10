import { useEffect } from "react";
import { FC, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { SearchCityType } from "../../types/forecast.type";
import * as Styled from "./style";

interface IProps {
  options: SearchCityType[];
  value: string;
  onChange: (value: string) => void;
  onChooseOption: (value: string) => void;
  width: string;
}
interface IOptionsProps {
  options: SearchCityType[];
  onSelect: (value: string) => void;
}

const Options: FC<IOptionsProps> = ({ options, onSelect }) => {
  return options.length ? (
    <Styled.Options>
      {options.map((option, index) => (
        <Styled.Option
          key={index}
          onClick={() => onSelect(option.LocalizedName)}
        >
          {option.LocalizedName}
        </Styled.Option>
      ))}
    </Styled.Options>
  ) : (
    <span>Nothing found</span>
  );
};

export const DropDown: FC<IProps> = ({
  options,
  value,
  onChange,
  onChooseOption,
  width,
}) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  const ref = useRef(null);
  const isNoValue = !!value.trim();

  useEffect(() => {
    if (value === select) {
      setOpen(false);
    }else if (isNoValue && options.length) {
      setOpen(true);
    }
  }, [value, select]);

  const handleOpen = () => {
    if (isNoValue) {
      setOpen(true);
    }
  };

  const onSelect = (select: string) => {
    onChooseOption(select);
    setSelect(select);
  };

  useOutsideClick(ref, setOpen);

  return (
    <Styled.Container width={width}>
      <Styled.Wrapper ref={ref}>
        <Styled.Content isOpenMenu={open} onClick={() => handleOpen()}>
          <Styled.Input
            value={value}
            onChange={(e) => onChange((e.target as HTMLInputElement).value)}
          />
        </Styled.Content>
        {open ? <Options options={options} onSelect={onSelect} /> : null}
      </Styled.Wrapper>
    </Styled.Container>
  );
};
