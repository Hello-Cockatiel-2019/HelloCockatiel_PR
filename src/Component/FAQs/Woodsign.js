import React, { Component } from 'react'
import styled from 'styled-components'
import { Paragraph, BrownParagraph } from '../Core/Text'

const Qwood = styled(BrownParagraph) `
    background-color :#DB9B51;
    width: 400px;
    /* height: 38px; */
    padding-left:0.7em;
    padding-top:0.3em;
    box-shadow: 5px 5px 8px black;
    margin: 0em 30em 0em 7em;
    @media only screen and (max-width:1024px) {
        width: 250px;
        margin:0em 20em 0em 0em;
    }
    @media only screen and (max-width:768px) {
        width: 300px;
    }
    @media only screen and (max-width:500px) {
        width: 330px;
    }
    @media only screen and (max-width:400px) {
        width: 300px;
    }
    @media only screen and (max-width:320px) {
        width: 250px;
        font-size:1em;
    }
`
const Awood = styled(Paragraph)`
    background-color:#987245;
    width: 400px;
    padding-top:0.5em;
    padding-bottom: 1em;
    padding-left:0.7em;
    box-shadow: 5px 5px 8px black;
    margin: 0em 30em 3em 7em;
    @media only screen and (max-width:1024px) {
        width: 250px;
        margin:0em 20em 2em 0em;
    }
    @media only screen and (max-width:768px) {
        width: 300px;
        margin:0em 0em 1em 0em;
    }
    @media only screen and (max-width:500px) {
        width: 330px;
        margin:0em 0em 1.5em 0em;
    }
    @media only screen and (max-width:400px) {
        width: 300px;
        margin:0em 0em 1em 0em;
    }
    @media only screen and (max-width:320px) {
        width: 250px;
        margin:0em 0em 1em 0em;
        font-size:1em;
    }
`
  

export default class Woodsign extends Component {
    render() {
        return (
                <React.Fragment> 
                <Qwood>Q: {this.props.q}</Qwood>
                <Awood>A: {this.props.a}</Awood>
                </React.Fragment>
        )
    }
}
