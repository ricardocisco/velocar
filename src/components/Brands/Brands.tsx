import React from "react";
import Audi from "../../images/image_home/brand_audi.png";
import Volks from "../../images/image_home/brand_volks.png";
import Renault from "../../images/image_home/brand_renault.png";
import Bmw from "../../images/image_home/brand_bmw.png";
import Mercedes from "../../images/image_home/brand_mercedes.png";
import Ford from "../../images/image_home/brand_ford.png";
import Nissan from "../../images/image_home/brand_nissan.png";
import { ContainerBrand } from "./styles";

export default function Brands() {
  return (
    <ContainerBrand>
      <div>
        <img src={Audi} alt="" />
      </div>
      <div>
        <img src={Volks} alt="" />
      </div>
      <div>
        <img src={Renault} alt="" />
      </div>
      <div>
        <img src={Bmw} alt="" />
      </div>
      <div>
        <img src={Mercedes} alt="" />
      </div>
      <div>
        <img src={Ford} alt="" />
      </div>
      <div>
        <img src={Nissan} alt="" />
      </div>
    </ContainerBrand>
  );
}
