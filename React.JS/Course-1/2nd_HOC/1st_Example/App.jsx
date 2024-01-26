
import { useState } from 'react'

// import { UserList } from './Components/UserList'
import { UserHOCComponent } from "./Components/UserList";
// import { TodoList } from './Components/TodoList'
import { TodoHOCComponent } from "./Components/TodoList";

function App() {
	return (
		<>
			<h1>Higher Order Component</h1>

			<div>
				{/* <UserList /> */}
				<UserHOCComponent />
				{/* <TodoList /> */}
				<TodoHOCComponent />
			</div>
		</>
	)
}

export default App