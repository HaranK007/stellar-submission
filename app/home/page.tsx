'use client'
import { About } from "@/components/about";
import Description from "@/components/description";
import Info from "@/components/info";
import LandingPage from "@/components/landingPage";

export default function HomePage(){
    return(
        <main>
            {/* <ReactLenis> */}
                <LandingPage />
                <Info/>
                <Description />
                <About />
            {/* </ReactLenis> */}
        </main>
    )
}