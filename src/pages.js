import React from "react";
import {
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export function Home() {
  return (
    <div>
      <header>
        <h1>Patrick Goddard</h1>
        <h2>Musician</h2>
      </header>
      <ul>
        <li><Link to="/insta-bio-links">Insta Bio Links</Link></li>
        <li><Link to="/i-hate-the-moon">New Single - I Hate The Moon</Link></li>
      </ul>
    </div>
  )
}

export function InstaBioLinks() {
  return (
    <div>
      <header>
        <h1>Patrick Goddard</h1>
        <h2>Instagram Bio Links</h2>
      </header>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=9anWZ8zIvb4">Music video: Patrick Goddard - Take Your Cameras Out (feat. The Clown Pool!)</a>
        </li>
        <li>
          <a href="https://charity.gofundme.com/o/en/campaign/silverado-skatepark-reimagination">
            Silverado Skatepark fundraiser
          </a>
        </li>
        <li>
          <a href="https://patrickgoddard.bandcamp.com/">
            My Music on Bandcamp
          </a>
        </li>
      </ul>
    </div>
  )
}

export function IhmLinks() {
  return (
    <div>
      <header>
        <h1>Patrick Goddard</h1>
        <h2>New Single - I Hate The Moon</h2>
      </header>
      <div className="embedded-player">
        <iframe style={{border: 0, width: '350px', height: '442px'}} src="https://bandcamp.com/EmbeddedPlayer/track=3990240484/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://patrickgoddard.bandcamp.com/track/i-hate-the-moon">I Hate The Moon by Patrick Goddard</a></iframe>
      </div>
      <ul class="two-col">
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://patrickgoddard.bandcamp.com/track/i-hate-the-moon">Bandcamp</a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/album/15yG23d3nBV0U84tCAoGy1?si=0Vu2G059QJSYiuLpb9hnKA">Spotify</a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://music.apple.com/us/album/i-hate-the-moon/1559478698?i=1559478699">Apple Music</a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://tidal.com/browse/album/177360112">Tidal</a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=j9Tk_p_riGA">YouTube</a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="https://www.pandora.com/artist/patrick-goddard/i-hate-the-moon-single/i-hate-the-moon/TRw4l556r9rh44Z">Pandora</a>
        </li>
      </ul>
    </div>
  )
}