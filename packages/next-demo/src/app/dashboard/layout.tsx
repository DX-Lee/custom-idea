import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'dashboard',
    keywords: 'this is a keywords'
}

export default function DashBoardLayout(props:{
    children: React.ReactNode
}) {
    const { children } = props
    return <div>
        <h1>title</h1>
        {children}
    </div>
}