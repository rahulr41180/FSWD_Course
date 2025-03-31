
export default function ComplexDashboardLayout({ children, users, revenue, notification }: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notification: React.ReactNode,
}) {

    return (
        <>
            <div>
                {children}
            </div>
            <div className="flex">
                <div className="flex flex-col">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex flex-1">{notification}</div>
            </div>
        </>
    )
}