import * as React from 'react'
import "./card.css"
import PropTypes from "prop-types"

const Container= ({ children }) =>{
    
    
        return(
            <div className="cards">
                {children}
            </div>
        )
    
    
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Container

