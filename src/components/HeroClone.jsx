import React , {Component} from 'react'
import './heroclonecss.css'


class HeroClone extends Component {
    render() {
        return (
          <div className="hero-img1">
              <div className="heading1">
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>
              </div>
          </div>
        )
    }
}

export default HeroClone;