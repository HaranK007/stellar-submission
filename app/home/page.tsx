'use client'
import { About } from "@/components/about";
import Description from "@/components/description";
import { HomeAbout } from "@/components/homeAbout";
import LandingPage from "@/components/landingPage";

export default function HomePage(){
    return(
        <main>
                <LandingPage />
                <HomeAbout />
                <Description />
                <About />
        </main>
    )
}