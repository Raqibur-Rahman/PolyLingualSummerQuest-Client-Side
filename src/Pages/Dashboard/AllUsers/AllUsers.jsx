import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://poly-lingual-server.vercel.app/users')
        return res.json();
    })

    const handelMakeAdmin = user => {
        fetch(`https://poly-lingual-server.vercel.app/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }

    const handelDelete = user => {
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
                fetch(`https://poly-lingual-server.vercel.app/carts/${user._id}`, {
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
        <div className="w-full">

            <Helmet>
                <title>PolyLingual | All Users</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <h3 className="text-3xl font-semibold">Total Users:{users.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin' ? 'admin' : <button onClick={() => handelMakeAdmin(user)} className=" btn  btn-outline bg-blue-500">
                                <FaUserShield></FaUserShield>
                            </button>}</td>
                            <td>
                                <button onClick={() => handelDelete(user)} className=" btn  btn-outline bg-red-500">
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

export default AllUsers;