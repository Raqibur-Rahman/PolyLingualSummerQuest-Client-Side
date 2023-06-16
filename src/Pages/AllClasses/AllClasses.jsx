import { useEffect, useState } from "react";
import AllClassesCard from "./AllClassesCard";
import Cover from "../../components/Cover/Cover";
import studyImg from "../../../src/assets/images/study.jpg";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
    const [classNames, setClassNames] = useState([]);

    useEffect(() => {
        fetch("../../../public/instructors.json")
            .then((res) => res.json())
            .then((data) => {
                const sortedClasses = data.sort(
                    (a, b) =>
                        b.classNames[0].numberOfStudents - a.classNames[0].numberOfStudents
                );
                const allClassNames = sortedClasses.map((instructor) => ({
                    name: instructor.classNames[0].name,
                    numberOfStudents: instructor.classNames[0].numberOfStudents,
                    availableSeats: instructor.classNames[0].availableSeats,
                    fee: instructor.classNames[0].fee,
                    languageImg: instructor.languageImg,
                }));
                setClassNames(allClassNames);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Helmet>
                <title>PolyLingual | All Classes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover
                img={studyImg}
                title="Our instructors are highly skilled professionals dedicated to helping students succeed. With expertise in their fields, they create engaging learning environments and utilize innovative teaching methods. They are committed to student development, adapt to different learning styles, and stay updated with the latest trends. Choose our instructors for a rewarding learning experience."
            />
            <p className="text-center font-medium">
                Explore the boundless horizons of learning through our extensive range
                of thought-provoking and meticulously crafted courses, meticulously
                designed to ignite your passion, challenge your limits, and empower you
                to reach new heights of excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
                {classNames.map((classItem, index) => (
                    <AllClassesCard
                        key={index}
                        item={classItem}
                       
                    />
                ))}
            </div>
        </div>
    );
};

export default AllClasses;
