
export default function AuthLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h1>Auth Header Layout</h1>
            {children}
            <h2>Auth Fotter Layout</h2>
        </div>
    )
}