import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'

export default function Home() {
    return (
        <div className="min-h-screen ">
            <Nav home={true} />
            <Header />
            <Footer />
        </div>
    )
}
