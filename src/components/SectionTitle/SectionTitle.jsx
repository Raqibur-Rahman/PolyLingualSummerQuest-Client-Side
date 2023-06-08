

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <h3 className="text-yellow-900 text-center font-bold text-3xl">{heading}</h3>
            <h5 className="text-yellow-700 text-center font-semibold text-xl">{subHeading}</h5>
            
        </div>
    );
};

export default SectionTitle;