import * as S from "./Input.style";

export interface IInput {
  placeholder?: string;
  defaultValue?: string;
}

const Input = ({ placeholder = "입력하세요.", defaultValue = "" }: IInput) => {
  return (
    <S.Wrap>
      <S.Input type="text" placeholder={placeholder} defaultValue={defaultValue} />
    </S.Wrap>
  );
};

export default Input;
