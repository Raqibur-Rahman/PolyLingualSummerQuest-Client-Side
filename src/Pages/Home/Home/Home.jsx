import Banner from "../Banner";
import Featured from "../Featured/Featured";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import ReviewSwipper from "./ReviewSwiper/ReviewSwipper";
import { Helmet} from 'react-helmet-async'


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>PolyLingual | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <PopularInstructors></PopularInstructors>

            <Featured></Featured>
            <ReviewSwipper></ReviewSwipper>
        </div>
    );
};

export default Home;