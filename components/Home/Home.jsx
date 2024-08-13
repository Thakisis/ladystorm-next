import { Hero, Dance, Sing, Burleska, Swimsuite, Sunshine, About, Offers } from "@/components/Sections"

function Home(props) {
    return (
        <div className="flex flex-col">
            <Hero />
            <Dance />
            <Sing />
            <Burleska />
            <Swimsuite />
            <Sunshine />
            <About />
            <Offers />
        </div>
    )
}

export default Home
