import { HTMLAttributes, ReactNode } from "react"

interface Container  extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function Container({ children, ...rest }: Container) {
    return (
        <div {...rest} className="rounded-2xl border-solid border-2 border-slate-500 w-80 h-96">
            { children }
        </div>
    )
}