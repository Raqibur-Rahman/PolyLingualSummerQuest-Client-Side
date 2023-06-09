import { useEffect } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import PopularItems from "../../../../components/PopularItems/PopularItems";


const PopularInstructors = () => {


    const [instructors, setInstructor] = useState([]);
    useEffect(() => {
        fetch('./../../../../../public/instructors.json')
            .then(res => res.json())
            .then(data => {
                // const popularInstructors = data.filter(item => item.numClasses > 5);
                const sortedInstructor = data.sort((a, b) => b.numberOfStudents - a.numberOfStudents);
                const topInstructors = sortedInstructor.slice(0,6);
                setInstructor(topInstructors);
            })
    }, [])



    return (
        <div className="rounded border m-3">
            <section>
                <SectionTitle
                    heading={"Meet Our Esteemed Instructors"}
                    subHeading={'Guiding You Towards Success'}
                ></SectionTitle>

                <p className="">Discover Our Top-Rated Instructors! Experience Their Passion and Expertise as They Guide You Towards Success. Join Us Today and Unleash Your Full Potential!</p>

                <div className="grid md:grid-cols-3 gap-4">
                    {
                        instructors.map(item => <PopularItems
                            key={item.id}
                            item={item}

                        ></PopularItems>)
                    }

                </div>




            </section>

        </div>
    );
};

export default PopularInstructors;