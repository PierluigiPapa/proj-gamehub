import { Footer } from "../components/Footer";
import { Jumbotron } from "../components/Jumbotron";
import { Newsletter } from "../components/Newsletter";
import { Statistiche } from "../components/Statistiche";

export function HomePage() {
    return (
        <>

        <Jumbotron></Jumbotron>
        <Statistiche></Statistiche>
        <Newsletter></Newsletter>
        <Footer></Footer>
    
        </>
    )
}