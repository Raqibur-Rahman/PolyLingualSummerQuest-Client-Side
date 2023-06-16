import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AllClassesCard = ({ item }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();
    const { name, numberOfStudents, availableSeats, fee, languageImg } = item;
    const navigate = useNavigate();
    const handelAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = {itemId: name,languageImg , fee , email:user.email}
            fetch("http://localhost:5000/carts",{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Course Added In Cart List',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Enroll',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{from:location}});
                }
            })
        }
    }




    return (
        <div className="border m-3 p-3 rounded-lg bg-orange-50 border-amber-500 text-center">
            <img
                src={languageImg}
                alt="Language"
                className="w-24 h-24 mx-auto rounded-lg"
            />
            <h3 className="font-bold">{name}</h3>
            <h3>
                <span className="font-semibold">Number of Students:</span>{" "}
                {numberOfStudents}
            </h3>
            <h3>
                <span className="font-semibold">Available Seats:</span>{" "}
                {availableSeats}
            </h3>
            <h3>
                <span className="font-semibold">Enrollment Fee:</span> $ {fee}
            </h3>
            <div className="card-actions flex justify-center p-3">
                <Link>
                    <button onClick={() => handelAddToCart(item)} className="btn btn-primary">Add to List</button>
                </Link>
            </div>
        </div>
    );
};

export default AllClassesCard;
