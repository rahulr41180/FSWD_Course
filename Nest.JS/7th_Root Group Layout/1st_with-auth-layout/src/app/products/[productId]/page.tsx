
export default function productPage({ params }: {
    params: {
        productId: string
    }
}) {

    return (
        <div>
            Product No. {params.productId}
        </div>
    )
}