import React from 'react'
import SamplePic from '../SamplePic.png'

function GitHubCard() {
  return (
  <div data-testId="gitHubCard-1">
  <div className="card">React Snapshot tests - GitHub Mockup</div>
  <img 
    styles={{ minWidth: 300, minHeight: 300 }}
    src={SamplePic} alt="Card cap" 
  />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, nesciunt.</p>
  </div>
  </div>
  )
}

export default GitHubCard