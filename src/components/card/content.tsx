import { ReactNode } from "react"

interface Content {
    children: ReactNode
}
export function Content ({ children }: Content) {
    return (
        <section className="p-3 text-justify pt-5 text-slate-700 dark:text-slate-300">
            <p>{children}</p>
        </section>
    )
}