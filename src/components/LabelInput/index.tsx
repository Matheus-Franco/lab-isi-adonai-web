import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface ILabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  fieldIsRequired?: boolean
}

const LabelInput: React.FC<ILabelInputProps> = ({ label, fieldIsRequired = false, ...props }) => {
  const renderFieldIsRequired = fieldIsRequired && '*'

  return (
    <S.Container>
      <p>{renderFieldIsRequired} {label}</p>
      <input type="text" {...props} />
    </S.Container>
  )
}

export default LabelInput;