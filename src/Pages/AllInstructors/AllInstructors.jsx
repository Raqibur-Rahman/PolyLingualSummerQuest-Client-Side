import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AllInstructorCard from "./AllInstructorCard";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";


const AllInstructors = () => {
    const [instructors, setInstructor] = useState([]);
    useEffect(() => {
        fetch('../../../public/instructors.json')
            .then(res => res.json())
            .then(data => {
                // const popularInstructors = data.filter(item => item.numClasses > 5);
                // const sortedInstructor = data.sort((a, b) => b.numberOfStudents - a.numberOfStudents);
                // const topInstructors = sortedInstructor.slice(0, 6);
                setInstructor(data);
            })
    }, [])



    return (
        <div className="rounded m-0 p-0">
            <Helmet>
                <title>PolyLingual | All Instructors</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img="https://images.squarespace-cdn.com/content/v1/5b7cb77b2714e5a761f16d18/1548885576509-K1C1TNYDYWKJVJZEQE6K/aes-blog-reasons-to-get-teaching-degree.jpg?format=1500w"
            title={"Our instructors are highly skilled professionals dedicated to helping students succeed. With expertise in their fields, they create engaging learning environments and utilize innovative teaching methods. They are committed to student development, adapt to different learning styles, and stay updated with the latest trends. Choose our instructors for a rewarding learning experience."}></Cover>
            <section>
                <SectionTitle
                    heading={"Meet Our Esteemed Instructors"}
                   
                ></SectionTitle>

             

                <p className="text-center font-medium">Embark on an extraordinary learning adventure with our exceptional team of top-rated instructors, whose unwavering dedication and commitment to excellence will inspire and motivate you to push beyond your limits. Through their unparalleled passion and expertise, they will guide you every step of the way, unlocking your full potential and propelling you towards unprecedented achievements.</p>

                <div className="grid md:grid-cols-3 gap-4">
                    {
                        instructors.map(item => <AllInstructorCard
                            key={item.id}
                            item={item}
                        ></AllInstructorCard>)
                    }

                </div>

            </section>

        </div>
    );
};

export default AllInstructors;