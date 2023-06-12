import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const [classNames, setClassNames] = useState([]);

  useEffect(() => {
    fetch("../../../../public/instructors.json")
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
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        {classNames.map((classItem, index) => (
          <PopularClassesCard
            key={index}
            name={classItem.name}
            numberOfStudents={classItem.numberOfStudents}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
