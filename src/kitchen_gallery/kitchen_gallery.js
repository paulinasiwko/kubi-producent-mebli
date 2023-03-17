import React from "react";
import AdditionalGallery from "../additional_gallery/additional_gallery";

export default function KitchenGallery () {
  return (
    <AdditionalGallery imageFolder={'kitchen_photos'}
                       alt={'kuchni'}
                       backgroundImage={'kitchenBackground'}
                       title={'Kuchnia'}
                       galleryArrayLength={70}/>
  );
}