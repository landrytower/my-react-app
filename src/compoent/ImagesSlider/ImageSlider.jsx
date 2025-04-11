import "./ImageSlider.css"


const image1 = './../../assets/fr.jpeg';
const image2 = './../../assets/so.jpeg';
const image3 = './../../assets/jr.jpeg';
const image4 = './../../assets/Sr.jpeg';

const imageArray = [image1,image2,image3,image4];


function ImagesSlider() {
  return (
    <div className="ImagesSlider">
      <div className="ImagesSliderContainer">
        <div className="Images">
          <img src={imageArray[0]} className="rightImage" />
          <img src={imageArray[1]} className="middleImage" />
          <img src={imageArray[2]} className="leftImage" />
        </div>
      </div>
      <div className="buttons">
        <button className="rightButton">right</button>
        <button className="leftButton">left</button>
      </div>
    </div>
  );
}

export default ImagesSlider
