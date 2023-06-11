
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../assets/images/image1.jpg'
import banner2 from '../../assets/images/slider2.png'
import banner3 from '../../assets/images/slider3.png'

const Banner = () => {
    return (


        <Carousel>
            <div>
                <img src={banner1} />

            </div>
            <div>
                <img src={banner2} />

            </div>
            <div>
                <img src={banner3} />

            </div>
        </Carousel>

    );
};

export default Banner;