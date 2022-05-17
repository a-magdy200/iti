import {useState} from "react";

const IMAGES = [
  "https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
  "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
  "https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g"
];
const SliderComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cycleInterval, setCycleInterval] = useState(0);
  const nextImage = (overlapping = false) => {
    console.log('next')
    setCurrentImageIndex(previous => previous < IMAGES.length - 1 ? previous + 1 : overlapping ? 0 : previous);
  }
  const previousImage = () => {
    console.log('prev')
    setCurrentImageIndex(previous => previous > 0 ? previous - 1 : 0);
  }
  const startCycle = () => {
    console.log('cycle')
    if (!cycleInterval) {
      console.log('interval')
      const interval = setInterval(() => {
        console.log('next interval')
        nextImage(true);
      }, 2000);
      setCycleInterval(interval);
    }
  }
  const stopCycle = () => {
    console.log('stop')
    if (cycleInterval) {
      console.log('interval')
      clearInterval(cycleInterval);
      setCycleInterval(0);
    }
  }
  return <div>
    <div style={{height: 200, marginBottom: 10}}>
      <img src={IMAGES[currentImageIndex]} alt={"image"} height={'100%'} />
    </div>
      <p>current image: <a href={IMAGES[currentImageIndex]}>{IMAGES[currentImageIndex]}</a></p>
    <div>
      <button onClick={() => nextImage()}>Next</button>
      <button onClick={previousImage}>Previous</button>
      <button onClick={startCycle}>Slide</button>
      <button onClick={stopCycle}>Stop</button>
    </div>
  </div>;
}
export default SliderComponent;
