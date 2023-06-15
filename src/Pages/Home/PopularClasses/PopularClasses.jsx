import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularClassesCard from "./PopularClassesCard";
import { Link } from "react-router-dom";

const PopularClasses = () => {
    const [classNames, setClassNames] = useState([]);

    useEffect(() => {
        fetch("https://poly-lingual-server.vercel.app/instructors")
            .then((res) => res.json())
            .then((data) => {
                const sortedClasses = data.sort(
                    (a, b) =>
                        b.classNames[0].numberOfStudents - a.classNames[0].numberOfStudents
                );
                const topClassNames = sortedClasses
                    .slice(0, 6)
                    .map((instructor) => ({
                        name: instructor.classNames[0].name,
                        numberOfStudents: instructor.classNames[0].numberOfStudents,
                        languageImg: instructor.languageImg,
                    }));
                setClassNames(topClassNames);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <SectionTitle
                heading={"Explore our Popular Classes"}
                subHeading={"Expand Your Knowledge and Skills"}
            />
            <p className="text-center font-medium">Explore the boundless horizons of learning through our extensive range of thought-provoking and meticulously crafted courses, meticulously designed to ignite your passion, challenge your limits, and empower you to reach new heights of excellence.</p>
            <div className="grid md:grid-cols-3 gap-4">
                {classNames.map((classItem, index) => (
                    <PopularClassesCard
                        key={index}
                        name={classItem.name}
                        numberOfStudents={classItem.numberOfStudents}
                        languageImg={classItem.languageImg}
                    />
                ))}
            </div>
            <div className="card-actions flex justify-center p-3">
                <Link to='/allclasses' >
                    <button className="btn btn-primary">View All Classes</button>
                </Link>
            </div>
        </div>
    );
};

export default PopularClasses;
