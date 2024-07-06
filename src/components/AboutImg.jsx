import React , {Component} from 'react'
import './About-imgStyles.css'


class AboutImg extends Component {
    render() {
        return (
          <div className="hero-img2">
              <div className="heading2">
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>
              </div>
          </div>
        )
    }
}

export default AboutImg;