import React from "react";
import AdditionalGallery from "../additional_gallery/additional_gallery";

export default function RoomGallery () {
  return (
    <AdditionalGallery imageFolder={'rtv_photos'}
                       alt={'mebli pokojowych'}
                       backgroundImage={'roomBackground'}
                       title={'Meble pokojowe'}
                       galleryArrayLength={20}/>
  );
}