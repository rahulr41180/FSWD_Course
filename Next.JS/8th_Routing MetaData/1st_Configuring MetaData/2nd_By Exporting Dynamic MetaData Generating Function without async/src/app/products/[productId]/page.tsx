
import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `Product ${params.productId}`
    }
}

export default function productPage({ params }: Props) {

    return (
        <div>
            Product No. {params.productId}
        </div>
    )
}