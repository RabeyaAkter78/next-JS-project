'use client';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


const UserInfo = () => {
    const { data: session } = useSession();

    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>#</th>
                            <td>{session?.user?.name}</td>
                            <td>{session?.user?.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={() => signOut()} className="btn btn-danger">Logout</button>
            </div>
        </div>
    );
};

export default UserInfo;