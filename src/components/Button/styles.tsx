import styled from "styled-components"
import { Theme } from "../../styles/theme"
import { ButtonProps } from './Button';

type ContainerProps = Pick<ButtonProps, 'backgroundColor'>;

export const Container = styled.button<ContainerProps>`
    background-color: ${(props) => props.backgroundColor ? props.theme.colors[props.backgroundColor] : "transparent"};
    border: none;
    border-radius: ${Theme.border.radius};
    color: ${Theme.colors.cor_branca};
    padding: 0.6rem 2rem;
    cursor: pointer;
    &:disabled {
      background-color: ${Theme.colors.cor_azul_200};
    }
`
