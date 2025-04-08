import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'

export default function Home() {
    return (
        <div className='min-h-screen '>
            <Nav />
            <Header />
            {/* <Main /> */}
            <Footer />
        </div>
    )
}
