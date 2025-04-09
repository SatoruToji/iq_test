interface Props {
    home?: boolean
}

export function Nav({ home }: Props) {
    return (
        <nav className="nav">
            <a href="/">Путь Гения✨</a>
            {home ? (
                <ul>
                    <li>
                        <a
                            href="https://github.com/SatoruToji/iq_test"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github
                        </a>
                    </li>
                </ul>
            ) : (
                <></>
            )}

            <div></div>
        </nav>
    )
}
