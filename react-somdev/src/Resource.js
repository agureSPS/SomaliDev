import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const Resource = () => (
  <GridWrapper>
    <body>

<header id="header"><p>Header...</p></header>

<div id="container">

    <main id="center" class="column">
        <article>
        
            <h1>Heading</h1>
            <p><script>generateText(50)</script></p>
        
        </article>								
    </main>

    <nav id="left" class="column">
        <h3>Left heading</h3>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
        </ul>
        <h3>Left heading</h3>
        <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
        </ul>

    </nav>

    <div id="right" class="column">
        <h3>Right heading</h3>
        <p><script>generateText(1)</script></p>
    </div>

</div>

<div id="footer-wrapper">
    <footer id="footer"><p>Footer...</p></footer>
</div>

</body>
  </GridWrapper>
)