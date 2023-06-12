import { useEffect } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import PopularItems from "../../../../components/PopularItems/PopularItems";
import { Link } from "react-router-dom";


const PopularInstructors = () => {


    const [instructors, setInstructor] = useState([]);
    useEffect(() => {
        fetch('./../../../../../public/instructors.json')
            .then(res => res.json())
            .then(data => {
                // const popularInstructors = data.filter(item => item.numClasses > 5);
                const sortedInstructor = data.sort((a, b) => b.numberOfStudents - a.numberOfStudents);
                const topInstructors = sortedInstructor.slice(0, 6);
                setInstructor(topInstructors);
            })
    }, [])



    return (
        <div className="rounded m-3">
            <section>
                <SectionTitle
                    heading={"Meet Our Esteemed Instructors"}
                    subHeading={'Guiding You Towards Success'}
                ></SectionTitle>

                <p className="text-center font-medium">Embark on an extraordinary learning adventure with our exceptional team of top-rated instructors, whose unwavering dedication and commitment to excellence will inspire and motivate you to push beyond your limits. Through their unparalleled passion and expertise, they will guide you every step of the way, unlocking your full potential and propelling you towards unprecedented achievements.</p>

                <div className="grid md:grid-cols-3 gap-4">
                    {
                        instructors.map(item => <PopularItems
                            key={item.id}
                            item={item}

                        ></PopularItems>)
                    }

                </div>




            </section>
            <div className="card-actions flex justify-center p-3">
                <Link >
                    <button className="btn btn-primary">View All Instructors</button>
                </Link>
            </div>

        </div>
    );
};

export default PopularInstructors;