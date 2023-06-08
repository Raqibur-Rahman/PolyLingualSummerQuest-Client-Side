import Banner from "../Banner";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import ReviewSwipper from "./ReviewSwiper/ReviewSwipper";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularInstructors></PopularInstructors>
            <ReviewSwipper></ReviewSwipper>
        </div>
    );
};

export default Home;