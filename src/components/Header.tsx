import Link from 'next/link'

export function Header() {
    return (
        <header className="border">
            <article>
                <section className="absolute left-0 ms-36">
                    <h2>Быть умным - это сдорово!</h2>
                    <Link href="/pages/hello" className="bg-gray-800">
                        take the test
                    </Link>
                </section>
            </article>
        </header>
    )
}
