import NowContent from './NowContent'
import Footer from '../components/Footer'

export const metadata = {
    title: 'Now',
    description:
        "A snapshot of what Ayomal Banneka is currently building, learning, and studying.",
}

export default function NowPage() {
    return (
        <>
            <NowContent />
            <Footer />
        </>
    )
}