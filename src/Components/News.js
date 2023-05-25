import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
   
  constructor(){
    console.log("This is my constroctor")
    super()
    this.state = {

      articles: [],
      loading:true,
      page:1
    }
}
 async componentDidMount(){
     let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=52b88c10e9274344a76eec0a860ce659&page=1&pageSize=20";
     let data=await fetch(url);
    //  console.log("Data:")
    //  console.log(data);
     let parsedData =await data.json()
    //  console.log("Parsed Data:")
    //  console.log(parsedData);
     
     this.setState({articles:parsedData.articles,totalResult:parsedData.totalResult})

}

  handlePrevClick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=52b88c10e9274344a76eec0a860ce659&page=${this.state.page-1}&pageSize=20`;
    let data=await fetch(url);
   //  console.log("Data:")
   //  console.log(data);
    let parsedData =await data.json()
   //  console.log("Parsed Data:")
   //  console.log(parsedData);
    
    this.setState({articles:parsedData.articles})
  //  console.log("Prev");
   this.setState={
     page:this.state.page-1,
     articles:parsedData.articles
   }
     
     
  }
  handleNextClick=async ()=>{
    if(this.state.page>Math.ceil( this.state.totalResult/20)){

    }
    else{

      
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=52b88c10e9274344a76eec0a860ce659&page=${this.state.page+1}&pageSize=20`;
      let data=await fetch(url);
      //  console.log("Data:")
      //  console.log(data);
      let parsedData =await data.json()
      //  console.log("Parsed Data:")
      //  console.log(parsedData);
      
     
      // console.log("Next");
      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles
      }
      )
    }
  }

  render() {
    return (
      <div className='container'>
        <h1>Monkey News</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col md-4" key={element.url}>
            <Newsitem title={element.title.slice(0,45)} desc={element.description==null?element.description:element.description.slice(0,88) } imgUrl={element.urlToImage==null?"https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/05/3d-render-modern-network-communications-science-background-with-plexus-design.jpg":element.urlToImage} newsUrl={element.url} />
            </div>
        })}
            
              
        </div>
        <div className="container d-flex justify-content-between my-1">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&laquo; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
       
        
        
      </div>
    )
  }
}
