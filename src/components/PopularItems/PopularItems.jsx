
const PopularItems = ({ item }) => {
    const { name,image, numClasses, classNames, numberOfStudents } = item;

    console.log("classNames ", classNames)
    return (
        <div className="border m-3 rounded-lg space-x-4 p-3 border-amber-500">
            <h3 className="flex justify-center">
                <img className="w-[115px]" src={image} alt="" />
            </h3>
            <h3>
                <span className="font-bold">Name:</span>  {name}
            </h3>
            <h3>
                <span className="font-bold">Number of Classes: </span>  {numClasses}
            </h3>
            <h3>
                <span className="font-bold">Number of Students:</span>  {numberOfStudents}
            </h3>
            <h3>
                <span className="font-bold">Class Names:</span>{" "}
                {classNames.map((className, index) => (
                    <span key={index}>
                        {className}
                        {index !== classNames.length - 1 && ", "}
                    </span>
                ))}
            </h3>
        </div>
    );
};

export default PopularItems;