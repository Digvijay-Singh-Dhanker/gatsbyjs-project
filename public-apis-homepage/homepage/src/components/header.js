import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineRead, AiOutlineVideoCamera,AiOutlineBars,AiTwotoneThunderbolt,AiOutlineAppstoreAdd } from "react-icons/ai";
import "./header.css"
const Header = ({ siteTitle }) => (
  <header className="wrapper">
    <div className="top_nav">
      <div className="left">
           <p>Play around with these free & public APIs with your side projects.</p>
      </div>
      <div className="right">
        <ul>
          <li> {/*Pop up */} </li>
          <li><a href={"https://twitter.com/mddanishyusuf"} >twitter</a></li>
          <li><a href={"https://public-apis.io/courses"} >newsletter</a></li>
          <li><a href={"https://public-apis.io/contact"}>contact</a></li>
        </ul>
      </div>
    </div>
    <div className="bottom_nav">
      
      <div className="left">
           <StaticImage 
          src="../images/header.png"
          width={133}
          height={30}
          
         ></StaticImage>
      </div>
      <div className="left">
        <ul>
          <li><a href={"https://public-apis.io/learn"} ><AiOutlineRead/>Learn</a></li>
          <li><a href={"https://public-apis.io/courses"}><AiOutlineVideoCamera/>Courses</a></li>
          <li><a href={"https://public-apis.io/blog"}><AiOutlineBars/>Blog</a></li>
        </ul>
      </div>
      <div className="right">
        <ul>
          
          <li> {/*Pop up */} </li>
          <li><a href={"https://nocodeapi.com/"} target="_blank"><AiTwotoneThunderbolt/>NoCodeAPI</a></li>
          <li><a href={"https://public-apis.io/submit"}><AiOutlineAppstoreAdd/>submit api -49$</a></li>
          
        </ul>
      </div>

    </div>
    <div className="bottom_nav" style={{backgroundColor: "#e8e8e8"}}>
      <input className="search" type="text" placeholder="Search api for next side project"/>
      
    <div className="left">
      <input className="drop-input" type="text" list="cars" style={{marginRight:"10px"}} placeholder="filter by price"/>
      <datalist className="drop">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </datalist>
      <input className="drop-input" type="text" list="cars" placeholder="filter by category"/>
      <datalist className="drop">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </datalist>
    </div>
      
        
     

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
