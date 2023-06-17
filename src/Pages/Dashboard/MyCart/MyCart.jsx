import Swal from "sweetalert2";
import useCart from "../../../components/hooks/useCart";

import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
    const [cart,refetch] = useCart();
    const total = cart.reduce((sum, item) => item.fee + sum, 0);


    const handelDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://poly-lingual-server.vercel.app/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div >
            <h1 className="text-3xl m-3">My Selected Classes</h1>
            <div className="flex justify-between h-11">
                <h3 className="text-xl m-3">Total Number of Classes : {cart.length} </h3>
                <h3 className="text-xl m-3">Total amount : ${total} </h3>
                <button className="btn btn-warning btn-sm m-3">Pay</button>

            </div>

            <div className="overflow-x-auto text-center">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Subject</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item.id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.
                                                    languageImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.
                                                itemId}</div>

                                        </div>
                                    </div>
                                </td>

                                <td> $ {item.fee}</td>

                                <td>
                                    <button onClick={() => handelDelete(item)} className=" btn  btn-outline bg-red-500">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>

                            </tr>)
                        }



                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyCart;