import React from "react";
import AdditionalGallery from "../additional_gallery/additional_gallery";

export default function WardrobeGallery () {
  return (
    <AdditionalGallery imageFolder={'wardrobe_photos'}
                       alt={'szafy'}
                       backgroundImage={'wardrobeBackground'}
                       title={'Szafy i garderoby'}
                       galleryArrayLength={29} />
  );
}