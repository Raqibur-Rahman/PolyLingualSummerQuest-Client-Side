import { Link } from 'react-router-dom';
import logo from '../../assets/images/ErrorLogo.jpg'
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div>
            <div className="error-page-container text-center">
                <p>

                    <img src={logo} alt="404 Error" />
                    <Link to='/'><button className="btn btn-warning">Back To Home</button></Link>

                </p>

            </div>

        </div>

    );
};

export default ErrorPage;