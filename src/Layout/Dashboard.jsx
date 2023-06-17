import { NavLink, Outlet } from "react-router-dom";
import { BiHomeAlt } from 'react-icons/bi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdClass, MdCastForEducation, MdPayment, MdOutlineHistory } from 'react-icons/Md';



const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open bg-blue-100 font-bold">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-amber-300">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-amber-300 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink to="/dashboard">
                            <BiHomeAlt /> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/mycart">
                            <MdClass /> My Selected Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myenrolledclasses">
                            <MdCastForEducation /> My Enrolled Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <MdPayment /> Payment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymenthistory">
                            <MdOutlineHistory /> Payment History
                        </NavLink>
                    </li>
                   

                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <BiHomeAlt></BiHomeAlt> Home
                        </NavLink>
                    </li>

                    <li><NavLink to="/allinstructors"> <FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>

                    <li><NavLink to="/allclasses"> <MdCastForEducation></MdCastForEducation> Classes</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;