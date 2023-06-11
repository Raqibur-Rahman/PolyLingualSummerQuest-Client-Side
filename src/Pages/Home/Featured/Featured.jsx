import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/images/Featured.jpg'
import './Featured.css'
import { Link } from "react-router-dom";


const Featured = () => {
    return (
        <div className="featured-item ">
            <SectionTitle
                heading={"Featured Item"}
                subHeading={"Check it out"}
            >
            </SectionTitle>

            <div className="md:flex justify-center items-center py-8 px-16 pb-20 pt-12">
                <div >
                    <div>
                        <img src={featuredImage} alt="" />
                    </div>
                </div>

                <div className="md:ml-10">
                    <p className="font-bold text-3xl p-3  pb-0">Master English Speaking Course</p>
                    <p className="font-semibold text-xl p-3 pt-0">Unlock Your Fluency and Confidence in English</p>
                    <p className="p-3 pt-0">
                        Our comprehensive English speaking course helps you master fluent communication in English. Whether beginner or advanced, gain skills, techniques, and practice to confidently speak English in any situation. Improve vocabulary, pronunciation, listening, and gain the confidence to express yourself fluently. Join today and elevate your communication skills!
                    </p>

                    <div className="card-actions  p-3">
                        <Link >
                            <button className="btn btn-primary">Enroll Now</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Featured;