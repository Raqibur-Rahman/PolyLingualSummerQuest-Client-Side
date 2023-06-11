import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Cover/Cover';
import AllClassesImg from '../../assets/images/study.jpg'

const AllClasses = () => {
    return (
        <div>
            <Helmet>
                <title>PolyLingual | Classes</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={AllClassesImg}></Cover>
            <h3>Welcome</h3>
        </div>
    );
};

export default AllClasses;