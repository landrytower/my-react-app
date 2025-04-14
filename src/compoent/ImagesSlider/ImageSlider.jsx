import "./ImageSlider.css"
import { FaArrowAltCircleLeft } from "react-icons/fa";
<FaArrowAltCircleLeft />
const image1 = "./../../assets/fr.jpeg";
const image2 = "./../../assets/so.jpeg";
const image3 = "./../../assets/jr.jpeg";


const imageArray =[image1,image2,image3,];

function ImageSlider(){
  return (
    <div className="ImageSlider">
      <div className="ImageSliderContainer">
        <div className="Images">
          <img src={imageArray[0]} className="rightImage" />
          <img src={imageArray[1]} className="middleImage" />
          <img src={imageArray[2]} className="leftImage" />
        </div>
      </div>
      <div className="buttons">
        <button className="rightButton">r<FaArrowAltCircleLeft/> </button>
        <button className="leftButton">l<FaArrowAltCircleLeft/> </button>
      </div>
    </div>
  );
  
}

export default ImageSlider