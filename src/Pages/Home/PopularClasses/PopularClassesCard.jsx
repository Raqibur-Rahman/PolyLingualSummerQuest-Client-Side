

const PopularClassesCard = ({ name, numberOfStudents }) => {
  return (
    <div className="border m-3 p-3 rounded-lg  bg-orange-50 border-amber-500">
      <h3>{name}</h3>
      <h3>Number of Students: {numberOfStudents}</h3>
      
    </div>
  );
};

export default PopularClassesCard;
