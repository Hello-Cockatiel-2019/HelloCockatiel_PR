import React, { Component } from 'react'
import styled from 'styled-components'
import { Small, Small2 } from '../Core/Text'

const IFbg = styled.div`
    background-color :#B3660B;
    opacity: 0.9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 27em;
    height: 10em;
    @media screen and (max-width: 600px){
        width:19em;
        height:7em;
    }
`
const Bird = styled.img`
    padding-left:2em;
    padding-top:0.7em;
    width:7.5em;
    @media screen and (max-width: 600px){
        width:6em;
        margin-top:-0.3em;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        margin-left:13.5em;
    }
`
const Frame = styled.img`
    margin-left:2em;
    width:6em;
    position:absolute;
    z-index: 2;
    padding-top:6.2em;
    margin-left:2em;
    @media screen and (max-width: 600px){
        width:4.5em;
        margin-left:13.5em;
        padding-top:4.4em;
    }
`
const Text = styled(Small)`
    font-family: Quark;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.05em;
    position:absolute;
    z-index: 3;
    padding-left:8em;
    margin-top:0.5em;
    color: #000000;
    @media screen and (max-width: 600px){
        line-height: 15px;
        padding-top:0.2em;
        padding-left:2em;
    }
`
const Topic = styled(Small2)`
    font-family: Quark;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    position:absolute;
    z-index: 4;
    padding-top:0.7em;
    padding-left:4em;
    @media screen and (max-width: 600px) {
        margin-left:16em;
        margin-top:-0.1em;
    }
`

export default class IF extends Component {
    render() {
        return (
            <IFbg>
                <Text>
                <div>Lorem Ipsum is simply </div>
                    <div>dummy text of the printing  </div>
                    <div>type setting industry. </div>
                    <div>Lorem Ipsum has been the  </div>
                    <div>industry's standard dummy </div>
                    <div>text ever</div> 
                </Text>
                <Frame src="/images/Objects/frame.png" />
                <Bird src="/images/Objects/c4.png" />
                <Topic>
                    Infra
                </Topic>
            </IFbg>
        )
    }
}
