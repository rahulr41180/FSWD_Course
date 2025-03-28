
import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(request: Request, context: {
    params: {
        id: string
    }
}) {
    if(parseInt(context.params.id) > comments.length) {
        redirect("/api/comments")
    }
    const comment = comments.find((comment) => comment.id === parseInt(context.params.id));
    return Response.json(comment);
}