
export default function Layout({children}: {
    children: React.ReactNode
}) {

    return (
        <div>
            <h1>Header</h1>
            {children}
            <h2>Fotter</h2>
        </div>
    )
}