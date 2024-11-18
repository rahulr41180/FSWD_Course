
import { useState } from "react"

export const CreateCommentPage = () => {
    const [comment, setComment] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

        } catch(error) {


        }
    }

    return (
        <div className="container myContainer">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={comment} onChange={(event) => setComment(event.target.value)} name="comment" id="" />
                <button className="btn green">Create</button>
            </form>
        </div>
    )
}