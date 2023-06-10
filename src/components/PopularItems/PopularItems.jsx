import { Link } from "react-router-dom";

const PopularItems = ({ item }) => {
  const { id, name, image, classNames, numberOfStudents } = item;

  return (
    <div className="border m-3 rounded-lg space-x-4 p-3 bg-orange-50 border-amber-500">
      <h3 className="flex justify-center">
        <img className="w-[115px]" src={image} alt="" />
      </h3>
      <h3>
        <span className="font-bold">Name:</span> {name}
      </h3>
      <h3>
        <span className="font-bold">Number of Classes: </span>{" "}
        {classNames.length}
      </h3>
      <h3>
        <span className="font-bold">Number of Students:</span>{" "}
        {numberOfStudents}
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
      <div className="card-actions flex justify-center p-3">
        <Link to={`/instructors/${id}`}>
          <button className="btn btn-primary">View details</button>
        </Link>
      </div>
      

    </div>
    
  );
};

export default PopularItems;
