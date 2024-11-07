
import React from "react"

export const HOC = ( WrappedComponent, entity ) => {

    return class extends React.Component {

        // This state refering to userList, todoList and term state which are using UserList.jsx and TodoList.jsx
        state = {
            data : [],
            term : ""
        }

        // In our UserList.jsx and TodoList.jsx 
        
        // the useEffect(() => { getUserData() }, []) and the useEffect(() => { getTodoData() }, []) 
        // logics are write for fetching the data and these are calling when componentDidMount 
        // so we will write this logic in our componentDidMount(){}

        componentDidMount() {
            const getData = async () => {
                // we will fetch data dynamically based on request means data fetch for users or data fetch for todo
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
                const data = await res.json()

                // console.log('data :', data)
                if (data) {    
                    this.setState({...this.state, data : data});
                }
            }
            getData();
        }

        render() {

            let { term, data } = this.state;
            const filteredData = data.filter((element) => {
                if(entity === "users") {
                    const { name } = element
                    return (
                        name.toLowerCase().indexOf(term.toLowerCase()) >= 0
                    )
                }
                if(entity === "todos") {

                    const { title } = element
                    return (
                        title.toLowerCase().indexOf(term.toLowerCase()) >= 0
                    )
                }
                
            })
            return (
                <>
                    <h4>{entity} List</h4>
                    <input
			        	type="text"
				        value={term}
				        onChange={(event) => this.setState({...this.state, term : event.target.value})}
			        />

                    {/* This is the component which are using HOC component and wrapped component have a prop where we will send the 
                        data
                    */}
                    <WrappedComponent data={filteredData}></WrappedComponent>

                </>
            )

        }
    }

}