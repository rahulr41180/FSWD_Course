"use client" 
function getRandormInt(count: number) {
    return Math.floor(Math.random() * count)
}

export default function Layout({children}: {
    children: React.ReactNode
}) {
    const random = getRandormInt(2);
    if(random === 1) {
        throw new Error("Error loading product")
    }

    return (
        <div>
            <h1>Header</h1>
            {children}
            <h2>Fotter</h2>
        </div>
    )
}