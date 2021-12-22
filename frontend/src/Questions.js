import React from 'react';
import styled from 'styled-components';
import * as XLSX from 'xlsx';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const Questions = () => (
  <GridWrapper>
  <html> 

<h2>Interview Questions</h2>

<table>
  <tr>
    <td>Questions</td>
    <td>Answers</td>
    
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
</html> 

    </GridWrapper>
  )