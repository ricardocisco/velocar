import styled from "styled-components";
import { Theme } from "../../styles/theme";

type bgProps = Pick<ContentProps, 'backgroundColor'>;

export const HeroPage = styled.div`
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  display: flex;
`;

export const SectionImg = styled.section`
  width: 50%;
  @media (max-width: 700px) {
    width: 70%;
  }
  & img {
    width: 100%;
  }
`;

export const SectionText = styled.section`
  width: 50%;
  & h1 {
    font-size: ${Theme.font.sizes.large};
    @media (max-width: 700px) {
      font-size: ${Theme.font.sizes.xxsmall};
    }
  }
  & p {
    color: ${Theme.colors.cor_cinza};
    @media (max-width: 700px) {
      font-size: ${Theme.font.sizes.zsmall};
    }
  }
  & span {
    color: ${Theme.colors.cor_azul};
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
      padding: 10px;
      width: 150px;
      @media (max-width: 700px) {
        width: 80px;
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-radius: ${Theme.border.radius};
  box-shadow: ${Theme.box.shadow};
  padding: 20px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 40px;
  }
  & div {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    & label {
      font-size: ${Theme.font.sizes.zsmall};
    }
    & input {
      padding: 3px;
      outline: none;
      border: none;
    }
  }
`;

export const ContainerHow = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const BoxHow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    font-size: ${Theme.font.sizes.xxxsmall};
    color: ${Theme.colors.cor_cinza_500};
  }
  & p {
    font-size: ${Theme.font.sizes.small};
  }
`;

export const HowWorkBox = styled.div`
  display: flex;
  margin-top: 20px;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div<bgProps>`
  border-radius: ${Theme.border.radius};
  box-shadow: ${Theme.box.shadow};
  background-color: ${(props) => props.backgroundColor ? props.theme.colors[props.backgroundColor] : "transparent"};
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
  padding: 15px;
`;
export const Title = styled.h1`
  margin: 5px;
  font-size: ${Theme.font.sizes.xxxsmall};
`;

export const Description = styled.h1`
  margin: 5px;
  font-size: ${Theme.font.sizes.xxsmall};
`;

type ContentProps = {
  backgroundColor?: "cor_azul_200" | "cor_branca" ;
  imageSrc?: string;
  title?: string;
  description?: string;
}

export const ContentHow: React.FC<ContentProps> = ({ backgroundColor, imageSrc, title, description}) => (
  <div>
    <ImageWrapper backgroundColor={backgroundColor}>
      <Image src={imageSrc}/>
    </ImageWrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </div>
);