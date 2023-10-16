import React from "react";
export default function Projects()
{
    return(
        <div id="projects-mid">
            <a href="https://github.com/QubitMatrix/Nebula" className="projects-links" target="_blank"><h3>Nebula</h3></a>
            <p>A virtual voice-based PC assistant using python's speech recognition module.<br/>Python | Speech Recognition | Personal Assistant</p><br/>
            <a href="https://github.com/QubitMatrix/Playfair-Cipher" className="projects-links" target="_blank"><h3>Playfair Cipher</h3></a>
            <p>Implementation of <a className="wiki-details" href="https://en.wikipedia.org/wiki/Playfair_cipher" target="_blank">Playfair Cipher</a> which is a symmetric encryption technique.<br/>C | Encryption | Ciphers</p><br/>
            <a href="https://github.com/QubitMatrix/EventZen" className="projects-links" target="_blank"><h3>EventZen</h3></a>
            <p>An all-round website to make hosting an event easier.<br/>Javascript | MERN | Web Dev | HTML | CSS</p><br/>
            <a href="https://github.com/QubitMatrix/socket-programming" className="projects-links" target="_blank"><h3>Multiplayer Games using Socket Programming</h3></a>
            <p>A multiplayer gaming platform that offers two engaging games: a text-based Hangman game and the classic Rock, Paper, Scissors. Players can connect through a central server, enabling them to enjoy these games remotely.<br/>Python | Sockets | Threads | Games</p><br/> 
            <a href="https://github.com/QubitMatrix/Car-Safety-System" className="projects-links" target="_blank"><h3>Car Safety System using Arduino</h3></a>
            <p>Implemented a functional prototype model that can detect fatigue, alcohol consumption and proximity thereby serving as a safety mechanism to ensure the driver is in a conscious state while driving.<br/>Arduino | Sensors | LCD | Car Safety</p><br/>
        </div>
    )
}