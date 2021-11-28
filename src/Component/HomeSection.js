import react from "react";
import Box from "./Boxes";
import Dog from "./Dogs";


const Home = () => {

    
  return (
      
    <div className="container mt-3">
      <h1 className="my-5 fw-bold text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <div className="row flex-wrap">
      
      <Box
        link = "/Dogs"
        header = "Random Dog Image Generator"
        imgSrc= "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:* "
      />
           <Box
        link = "/Cats"
        header = "Random Cat Image Generator"
        imgSrc= "https://media.istockphoto.com/photos/curious-kitten-looking-at-the-camera-picture-id1270023880?b=1&k=20&m=1270023880&s=170667a&w=0&h=7tAE4L2d7qJ4k1OMydwof1kObkG6TuNkDj2n2QC88ic="
      />
                 <Box
        link = "/Coffee"
        header = "Random Coffee Image Generator"
        imgSrc= "https://coffee.alexflipnote.dev/-vtXsQuH8Qc_coffee.jpg"
      />
      
      </div>



        </div>
    
  );
};

export default Home;
