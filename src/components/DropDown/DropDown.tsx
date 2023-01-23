import { useEffect } from "react";
import { FC, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { OptionType } from "../../types/common.type";
import Options from "./Options";
import * as Styled from "./style";

interface IProps {
  options: OptionType[];
  value: string;
  onChange: (value: string) => void;
  onChooseOption: (value: string) => void;
  width: string;
  loader?: boolean;
}
export const DropDown: FC<IProps> = ({
  options,
  value,
  onChange,
  onChooseOption,
  width,
  loader,
}) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  const ref = useRef(null);
  const isNoValue = !!value.trim();
  
  useEffect(() => {
    return !isNoValue ? setOpen(false) : setOpen(true);
  }, [value, select, options, isNoValue]);

  const onSelect = (select: string) => {
    setSelect(select);
    onChooseOption(select);
  };
  
  useOutsideClick(ref, setOpen);

  return (
    <Styled.Container width={width}>
      <Styled.Wrapper ref={ref}>
        <Styled.Content isOpenMenu={open}>
          <Styled.Input
            onChange={(e) => onChange((e.target as HTMLInputElement).value)}
          />
        </Styled.Content>
        {open ? <Options loader={loader} options={options} onSelect={onSelect} /> : null}
      </Styled.Wrapper>
    </Styled.Container>
  );
};
