interface Header {
    title: string;
}

export function Header ({ title }: Header) {
    return (
        <header className="pl-3 pt-3 text-blue-400 dark:text-white">
            <h3 className="font-medium tracking-wide">
                { title }
            </h3>
        </header>
    )
}