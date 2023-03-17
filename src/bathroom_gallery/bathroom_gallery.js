import React from "react";
import AdditionalGallery from "../additional_gallery/additional_gallery";

export default function BathroomGallery () {
  return (
    <AdditionalGallery imageFolder={'bathroom_photos'}
                       alt={'łazienki'}
                       backgroundImage={'bathroomBackground'}
                       title={'Łazienki'}
                       galleryArrayLength={13}/>
  );
}