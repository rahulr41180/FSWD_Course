
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComment = query ? comments.filter((comment, index) => comment.title.includes(query)) : comments;
    console.log('filteredComment:', filteredComment)
    return Response.json(filteredComment);
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comment.id + 1,
        title: comment.title
    }

    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}