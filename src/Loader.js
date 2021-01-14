import React from "react";
import Loader from 'react-loader-spinner'
// eslint-disable-next-line
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


export default class Loading extends React.Component {
    constructor () {
        super()
    }

    componentDidMount () {
        setTimeout(() => {
            let loader = document.querySelector(".Loader div")
            console.log("loaded")
            loader.style.opacity = "0"
            setTimeout(() => {
                loader.remove()
            }, 300)
        }, 500)
    }

    render () {
        return(
            <div className="Loader">
                <Loader
                   type="Grid"
                   color="#424242"
                   height={isMobile ? 50 : 100}
                   width={isMobile ? 50 : 100}
                //    timeout={3000} //3 secs
           
                />
            </div>
        );
    }
}