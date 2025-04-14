import Link from "next/link"

interface Props {
    home?: boolean
}

export function Nav({ home }: Props) {
    return (
        <nav className="nav">
            <Link href='/'>Путь Гения✨</Link>
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
