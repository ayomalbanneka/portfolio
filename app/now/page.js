import NowContent from './NowContent'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ayomalbanneka.me";

export const metadata = {
    title: 'Now',
    description:
        "A snapshot of what Ayomal Banneka is currently building, learning, and studying.",
    alternates: { canonical: `${siteUrl}/now` },
}

export default function NowPage() {
    return (
        <>
            <NavBar />
            <NowContent />
            <Footer />
        </>
    )
}