import { Link } from "react-router-dom";

const AllInstructorCard = ({item}) => {
    const { id, name, email, image, classNames, totalNumberOfStudents
    } = item;
    console.log(item);

    return (
        <div className="border  m-3 rounded-lg space-x-4 p-3 bg-orange-50 border-amber-500 ">
            <h3 className="flex justify-center p-0 m-0">
                <img className="w-[115px]" src={image} alt="" />
            </h3>
            <h3>
                <span className="font-bold">Name:</span> {name}
            </h3>
            <h3>
                <span className="font-bold">Email: </span>{" "}
                {email}
            </h3>
            <h3>
                <span className="font-bold">Number of Classes: </span>{" "}
                {classNames.length}
            </h3>
            <h3>
                <span className="font-bold">Number of Students:</span>{" "}
                {totalNumberOfStudents}
            </h3>
            <h3>
                <span className="font-bold">Class Names:</span>{" "}
                {classNames.map((classObj, index) => (
                    <Link
                        to={`/classes/${encodeURIComponent(classObj.name)}/${id}`}
                        key={index}
                        className="text-blue-500 hover:underline"
                    >
                        <span>
                            {classObj.name} ({classObj.numberOfStudents} students)
                            {index !== classNames.length - 1 && ", "}
                        </span>
                    </Link>
                ))}
            </h3>

        </div>

    );
};

export default AllInstructorCard;