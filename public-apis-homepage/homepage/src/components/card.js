import * as React from 'react'
import "./card.css"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillDatabase } from "react-icons/ai";
export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className="card">
                <div className="card-head">
                    <img src={this.props.data.icon}></img>
                    <p><AiFillDatabase/>{this.props.data.category}</p>
                </div>
                <div className="card-content">
                    <h4>{this.props.data.heading}</h4>
                    <p>{this.props.data.description}</p>
                </div>
                
                
            </div>
        )
    }
}
