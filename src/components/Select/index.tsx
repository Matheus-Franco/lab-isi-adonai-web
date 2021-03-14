import React, { OptionHTMLAttributes } from 'react';
import * as S from './styles';

interface ISelectProps extends OptionHTMLAttributes<HTMLSelectElement> {
    optionsArray: Array<string>
    firstOption: string
}

const Select: React.FC<ISelectProps> = ({ firstOption, optionsArray, ...props }) => {
    const renderSelectOptions = optionsArray.map(option => (
        <option>{option}</option>
    ))

    return (
        <S.Container>
            <select {...props}>
                <option>{firstOption}</option>
                {renderSelectOptions}
            </select>
        </S.Container>
    )
}

export default Select;