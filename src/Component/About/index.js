import React, {Component} from 'react'
import styled from 'styled-components'

import {Paragraph,Subtitle} from '../Core/Text'

import MobileHeader from '../Core/MobileHeader';
import Where from './Where'

const Plate = styled.div`
    @media(min-width:320px) {
        background-image: url(/images/Objects/small-plate.png);
        width:260px;
        height: 290px;
        margin-left:1.8em;
      }
      @media(min-width:375px) {
        background-image: url(/images/Objects/small-plate.png);
        width:271px;
        height: 302px;
        margin-left:3.2em;
        }
      @media (min-width:410px) {
        background-image: url(/images/Objects/small-plate.png);
        width:309px;
        height: 344px;
        margin-left:3.5em;
      }
      @media(min-width:576px) {
        background-image: url(/images/Objects/small-plate.png);
        width:434px;
        height:484 px;
        margin-left:6.25em;
      }
      @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        background-image: url(/images/Objects/small-plate.png);
        width:579px;
        height: 645px;
        margin-left:5em;
      }
      @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation:landscape)  {
        background-image: url(/images/Objects/big-platebird.png);
        width:383px;
        height: 240px;
      }
      @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation:portrait)  {
        background-image: url(/images/Objects/small-plate.png);
        width:523px;
        height: 583px;
        margin-left:10em;
      }
      @media (min-width:960px) {
        background-image: url(/images/Objects/big-platebird.png);
        width:478px;
        height: 300px;
      }
      @media(min-width:1024px) {
        background-image: url(/images/Objects/big-platebird.png);
        width:510px;
        height: 320px;
      }
      @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation:portrait)  {
        background-image: url(/images/Objects/small-plate.png);
        width:523px;
        height: 583px;
        margin-left:10em;
      }
      margin-left:0em;
      background-size:100%; 
      background-repeat: no-repeat;
      size:100%;
         
`
const Title = styled(Subtitle)`
      @media(min-width:320px) {
        padding-top:.25em;
      }
      @media (min-width:410px) {
        padding-top:.4em;
      }
      @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        padding-top:.5em;
        font-size:30px;
      }
      @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation:landscape)  {
        padding-top:1.5em;
      }
      @media only screen and (min-width: 768px) and (max-height: 635px) and (orientation: landscape)  {
        padding-top:.8em;
        font-size:25px;
      }
      @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation:portrait)  {
        padding-top:.3em;
        font-size:30px;
      }
      @media (min-width:960px) {
        margin-left:1px;
        padding-top:1.1em;
      }
      @media(min-width:1024px) {
        margin-left:3px;
        padding-top:1.5em;
        font-size:23px;
      }
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`
const Content = styled(Paragraph)`
      @media(min-width:320px) {
        margin-left:30px;
        margin-top:5px;
      }
      @media (min-width:410px) {
        margin-left:35px;
        margin-top:10px;
      }
      @media (min-width:768px) {
        margin-left:65px;
        margin-top:28px;
      }
      @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation:portrait)  {
        font-size:28px;
      }
      @media (min-width:960px) {
        margin-left:44px;
        margin-top:20px;
      }
      @media(min-width:1024px) {
        margin-left:50px;
        margin-top:24px;
      }
      line-height: 27px;
letter-spacing: 0.05em;
`
const AboutBox = () => (
  <div className="conteiner">
    <div className="row align-items-end">
      <MobileHeader text="ข้อมูลโครงการ" HeaderURl="plate-m2.png" /> 
      <div className="col-sm-12 col-md-12 col-lg-8">
        <Plate>
          <Title className = "text-center" >
            About us 
          </Title>
          <Content >
              text  
          </Content> 
        </Plate>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4">
        <Where/>
      </div>
    </div>
  </div>
   
)
export default class About extends Component {
    render() {
        return (
          <AboutBox/>
  
           )
    }
}