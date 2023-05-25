import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'




export default class News extends Component {
   static defaultProps={
     country:'in',
     pageSize:8,
     category:'general'
   }

   static propTypes ={
    country : PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,
   }
  

  constructor() {
    console.log("This is my constroctor");
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=52b88c10e9274344a76eec0a860ce659&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);

    //  console.log("Data:")
    //  console.log(data);
    let parsedData = await data.json();
    //  console.log("Parsed Data:")
    //  console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResult,
      loading:false
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=52b88c10e9274344a76eec0a860ce659&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    //  console.log("Data:")
    //  console.log(data);
    let parsedData = await data.json();
    //  console.log("Parsed Data:")
    //  console.log(parsedData);

    
    //  console.log("Prev");
    this.setState = {
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    };
  };
  handleNextClick = async () => {
    if (
      this.state.page > Math.ceil(this.state.totalResult / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=52b88c10e9274344a76eec0a860ce659&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      //  console.log("Data:")
      //  console.log(data);
      let parsedData = await data.json();
      //  console.log("Parsed Data:")
      //  console.log(parsedData);

      // console.log("Next");
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
    }
  };

  render() {
    return (
      <div className="container bg-light width=100%">
        <h1 className="text-center">Monkey News</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <Newsitem
                  title={element.title.slice(0, 45)}
                  desc={
                    element.description == null
                      ? element.description
                      : element.description.slice(0, 88)
                  }
                  imgUrl={
                    element.urlToImage == null
                      ? "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/05/3d-render-modern-network-communications-science-background-with-plexus-design.jpg"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-1">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={this.handlePrevClick}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              this.state.page >
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}
