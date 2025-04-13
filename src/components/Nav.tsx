import Link from "next/link"

interface Props {
    home?: boolean
}

export function Nav({ home }: Props) {
    return (
        <nav className="nav">
            <a href="./">Путь Гения✨</a>
            {home ? (
                <ul>
                    <li>
                        <Link
                            href="https://github.com/SatoruToji/iq_test"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github
                        </Link>
                    </li>
                </ul>
            ) : (
                <></>
            )}

            <div></div>
        </nav>
    )
}
