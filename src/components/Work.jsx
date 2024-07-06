import "./WorkCardStyles.css"
import React from 'react'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'


const Work = () => {

  return (
    <div className="work-container">
        <div className="test">
            <div className="project-container">
                {WorkCardData.map((val , idx) => {
                    return (
                        <WorkCard
                            key = {idx}
                            imgsrc = {val.imgsrc}
                            title = {val.title}
                            text = {val.text}
                            view = {val.view}
                            source = {val.source}
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Work