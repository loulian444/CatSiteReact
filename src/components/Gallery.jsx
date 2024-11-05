import PHOTOS from "../../photos/index.js";

const Gallery = () => {
  console.log(PHOTOS);

  return (
    <>
      <h1>Gallery</h1>
      {PHOTOS.map((photo) => {
        return <img src={photo.src} alt={photo.alt} key={photo.src} />;
      })}
    </>
  );
};

export default Gallery;
