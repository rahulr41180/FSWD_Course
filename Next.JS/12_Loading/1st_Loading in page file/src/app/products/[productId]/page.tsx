
import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({params}: Props): Metadata => {
    const title = await new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(`iPhone ${params.productId}`)
        },100)
    })
    return {
        title: `Product ${title}`
    }
}

export default function productPage({ params }: Props) {

    return (
        <div>
            Product No. {params.productId}
        </div>
    )
}