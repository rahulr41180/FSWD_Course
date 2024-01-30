
import { useState, useEffect } from 'react'

import { HOC } from "./HOC";

const UserList = ({ data }) => {
	// const [userList, setUserList] = useState([])
	// const [term, setTerm] = useState('')
	// console.log('userList :', userList)

	// useEffect(() => {
	// 	getUserData()

	// }, [])

    // This getUserData Fn() have same logic as getTodoData Fn() just difference is /users and /todo

	// const getUserData = async () => {
	// 	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	// 	const data = await res.json()
	// 	// console.log('data :', data)
	// 	if (data) {

	// 		setUserList(data)
	// 	}
	// }

	return (
		<>
            {/* This is also repeating in both component */}
			{/* <h4>UserList</h4> */}
            {/* This is also repeating in both component */}

			{/* <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} /> */}
			{/* {userList
				.filter((element) => {
					return (
						element.name
							.toLowerCase()
							.indexOf(term.toLowerCase()) >= 0
					)
				})

				.map((item, index) => {
					console.log("item :", item);
					return (
						<>
							<div key={index}>
								<p>
									<strong>{item.name}</strong>
								</p>
							</div>

						</>
					)
			})} */}

            {data.map((item, index) => {
                return (
                    <>
                        <div key={index}>
							<p>

								<strong>{item.name}</strong>
							</p>
						</div>
                    </>
                )
            })}
		</>
	)
};

// Before we are export the UserList but now our main component is not UserList our main component will be the component which
// will return by Higher Order Component and this UserList component use by HigherComponent for converting it to main component

// export { UserList }
// For create a main component we have do this

const UserHOCComponent = HOC(UserList, "users");
export { UserHOCComponent }