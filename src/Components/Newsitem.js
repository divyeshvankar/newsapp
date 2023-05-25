import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,desc,imgUrl,newsUrl}=this.props;
    return (
      <div className="container my-3">

      
      <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={imgUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
      </div>
    </div>
    </div> 



    )
  }
}
