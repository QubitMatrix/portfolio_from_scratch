import React from "react";
export default function About()
{
    return(
        <div id="about-mid">
            <picture>
                <source media="(prefers-color-scheme:dark)" srcSet="profile_dark.png" />
                <img width="400px" height="300px" src="profile_light.png" alt="main home" id="home-img" />
            </picture>
            <br/>
            <div id="about-text">
                <p><em>Hey Everyone!!! <a href="https://github.com/QubitMatrix" target="_blank">Preethi. M</a> on this side!</em></p>
                <p>3rd year student pursuing B.Tech(CSE) at PES University.</p>
                <p>I'm all about tackling complex problems and a strong believer in late-night coding sessions. Fascinated by the ever-evolving realm of cybersecurity, I'm constantly learning new things that reshape my view of the digital world. In my free time I like to solve CTF problems and explore security tools.</p>
                <p>My favourite editor is VIM ❤️ and I cannot tolerate working with any editor that does not support vim bindings😅</p><br/>
                <u>My interests:</u><br/>
                <span>Computer Networks | Cybersecurity | Web Development | Competitive Coding</span>
            </div>
        </div>
    )
}