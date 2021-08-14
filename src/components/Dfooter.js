import React from 'react'
import styled from "styled-components";

const P = styled.p`
    text-align: center;
    font-size: 2rem;
    color: rgb(255, 242, 182);
`


function Dfooter() {
    return (
    <section className="footer" style={{background: '#161616'}}>
        <div className="container">
            <P className="display-1">
            &#169; IEEE<br/>Made by Devang
            </P>
        </div>
    </section>
    )
}

export default Dfooter
