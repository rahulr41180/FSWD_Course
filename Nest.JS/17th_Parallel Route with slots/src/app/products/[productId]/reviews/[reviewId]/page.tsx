"use client"
import { notFound } from "next/navigation";

function getRandormInt(count: number) {
    return Math.floor(Math.random() * count)
}

export default function ReviewDetail({
    params
}: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    const random = getRandormInt(2);
    console.log('random:', random)

    // if(random === 1) {
    //     throw new Error("Error loading review");
    // }
    if (parseInt(params.reviewId) > 1000) {

        notFound(); // programatically render not found page
    }
    return (
        <h1>Review {params.reviewId} for product {params.productId} </h1>
    )
}