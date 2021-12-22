import React from 'react';
import styled from 'styled-components';
import  react from  './images/react.png';
const GridWrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 580px;
  div {
    margin-left: -30px;
    margin-top: 300px;
  }

`;
export const Home = (props) => (
    <GridWrapper>
     <img src= {react} alt="randomImg" width="500" height="600"></img>
       
       <form>
            <label>
                Write Something:
                <input type="textarea" name="blog" rows="40" cols="50" />
            </label>
            <input type="submit" value="Post" />
        </form>

       <div>
        <h3>Newest Blogs</h3>
          <p>This is a blog.</p>
          <p>This is a blog.</p>
       </div>

    </GridWrapper>
  )