

const AllClassesCard = ({ name, numberOfStudents, languageImg }) => {
    return (
        <div className="border m-3 p-3 rounded-lg bg-orange-50 border-amber-500 text-center">
            <img src={languageImg} alt="Language" className="w-24 h-24 mx-auto rounded-lg" />
            <h3 className="font-bold">{name}</h3>
            <h3> <span className="font-semibold">Number of Students:</span> {numberOfStudents}</h3>

           

        </div>
    );
};

export default AllClassesCard;