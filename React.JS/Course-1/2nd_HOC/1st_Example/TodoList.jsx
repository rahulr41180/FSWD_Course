
import { useState, useEffect } from 'react';

import { HOC } from "./HOC";

const TodoList = ({ data }) => {
	// const [todoList, setTodoList] = useState([])
	// const [term, setTerm] = useState('')
	// console.log('todoList :', todoList)

	// useEffect(() => {
	// 	getTodoData()

	// }, [])


    // This getTodoData Fn() have same logic as getUserData Fn() just difference is /users and /todo

	// const getTodoData = async () => {
	// 	const res = await fetch('https://jsonplaceholder.typicode.com/todos')
	// 	const data = await res.json()
	// 	// console.log('data :', data)

	// 	if (data) {
	// 		setTodoList(data)
	// 	}
	// }

	return (
		<>
			{/* <h4>TodoList</h4>
			<input

				type="text"
				value={term}
				onChange={(event) => setTerm(event.target.value)}
			/>
			{todoList.filter((element) => {
					return (
						element.title
							.toLowerCase()
							.indexOf(term.toLowerCase()) >= 0

					)
				})
                .splice(0, 10)
				.map((item, index) => {
					console.log('item :', item)
					return (
						<>
							<div key={index}>
								<p>
								
									<strong>{item.title}</strong>
								</p>
							</div>

						</>
					)
			})} */}
			{data.slice(0,10).map((item, index) => {
				return(

					<>
						<div key={index}>

							<p>
								<strong>{item.title}</strong>
							</p>
						</div>
					</>
				)

			})}
		</>
	)

}

// Before we are export the TodoList but now our main component is not TodoList our main component will be the component which
// will return by Higher Order Component and this TodoList component use by HigherComponent for converting it to main component


// export { TodoList }

// For creating it main component we have to do this.
const TodoHOCComponent = HOC(TodoList, "todos");

export { TodoHOCComponent };