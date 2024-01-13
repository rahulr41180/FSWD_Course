
import { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        fetchUsers();
    },[])

    const fetchUsers = async() => {

        const res = await fetch("");
        const json = await res.json();
        setUsers(json);
        console.log(json);
    };



    return (
        <div>
            <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} name="" id="" />
            {users.filter(({ name }) => {
                return name.indexOf(term) >= 0;
            })
            .map((element, index) => {
                return (
                    <div key={index}>
                        <p>
                            <strong>{element.name}</strong>
                        </p>
                    </div>
                )
            })}
        </div>
    )

}