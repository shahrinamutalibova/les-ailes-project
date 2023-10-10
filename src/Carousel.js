import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  margin: '0',
  height: '60vh',
  color: '#fff',
  width:"100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const styleImg = {
  width:"90%",
  maxHeight: '60vh',
  margin: 'auto',
  borderRadius:"15px",
  objectFit:"fill"
}

const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel className='carousel' afterChange={onChange}>
      <div style={contentStyle}>
        <img style={styleImg} src="https://api.lesailes.uz/storage/sliders/2023/08/28/Ed2LHub9h0CRG4VfeVh8TGTPdLYz9u3wNTB5OcIO.jpg" alt="" />
      </div>
      <div style={contentStyle}>
        <img style={styleImg} src="https://api.lesailes.uz/storage/sliders/2023/03/03/riQZJLIR20IAklxGl5vIy1jKP5N9Cl38J0orhlyw.jpg" alt="" />
      </div>
      <div style={contentStyle}>
        <img style={styleImg} src="https://api.lesailes.uz/storage/sliders/2023/01/24/U9mJTwrFyVTwRhG5tcLiyyjNBfgIw3DYBoSem8ej.jpg" alt="" />
      </div>
      <div style={contentStyle}>
        <img style={styleImg} src="	https://api.lesailes.uz/storage/sliders/2022/11/15/cbRfL362fcva1AIWqhqfLqgQBJgPEGbWkioEzMmb.jpg" alt="" />
      </div>
      <div style={contentStyle}>
        <img style={styleImg} src="https://api.lesailes.uz/storage/sliders/2022/11/25/LgEDSHKBwO32f34wX2Y8v7PgEPXw8j8efaUahYZO.jpg" alt="" />
      </div> 
      <div style={contentStyle}>
        <img style={styleImg} src="https://api.lesailes.uz/storage/sliders/2022/09/16/ssSeaUdEBqHxukCsQx7PWoXDp98PkJmG18AL9Rqf.jpg" alt="" />
      </div> 
      <div style={contentStyle}>
        <img style={styleImg} src="https://api.lesailes.uz/storage/sliders/2022/02/23/0RkMpnz75Nb53YPXtFtOPEgq1Y4eZ0B7Y6WlEuxX.webp" alt="" />
      </div>
    </Carousel>
  );
};

export default App;
