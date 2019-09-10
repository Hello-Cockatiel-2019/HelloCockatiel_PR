import React, { Component } from 'react';
import styled from 'styled-components'
import dayjs from 'dayjs'

import Header from './Header';
import Register from './Register';
import { Desktop , Mobile } from './Hidden'
import { HamburgerDiv } from './Hamburger'

// const datenow = dayjs().format()
const datenow = dayjs('2019-09-26')
// const datenow = dayjs('2019-10-01')
const dateStartResgis = dayjs('2019-09-25')
const dateEndRegis = dayjs('2019-09-30')



const SideBarSection = styled.div`
    transform:translateY(60%);
    background-image:url();
    background-repeat:no-repeat;
    background-position-x:40%;
`

const RegiserButton = styled(SideBarSection)`
    transform:translate(-20%,20%);
    background-image:unset;
    visibility:${ (dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow) ? 'visible' : 'hidden')};
`
const MRegiserButton = styled.div`
    display:${ (dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow) ? 'block' : 'none')};
`

const DivVinea = styled.div`
    transform:translate(50%,-70%);

`
const DivVineb = styled.div`

`


export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Desktop className="container-fluid">
                <div className="row justify-content-between">
                    <SideBarSection className="col-2 d-inline-flex flex-column ml-5">
                        <Header />
                    </SideBarSection>
                    <RegiserButton className="col-3 col-xl-2 d-inline-flex">
                        {/* <DivVinea>
                            <img src="/images/Objects/vine-a.png"  />
                        </DivVinea>
                        <DivVineb>
                            <img src="/images/Objects/vine-b.png"  />
                        </DivVineb> */}
                        <Register />
                    </RegiserButton>
                </div>
                </Desktop>
                <Mobile className="container-fluid">
                    <div className="row justify-content-end">
                    <HamburgerDiv>
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id="menu" className="p-4 ">
                                <Header />
                                <MRegiserButton className="text-center mt-3">
                                    <Register />
                                </MRegiserButton>
                            </ul>
                        </HamburgerDiv>
                    </div>
                </Mobile>
            </React.Fragment>

        )
    }
}