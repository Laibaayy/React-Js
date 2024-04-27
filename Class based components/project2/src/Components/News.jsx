import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "sports",

    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };
    constructor() {
        super();

        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalarticles: 0,
        }
    }



    async updatemethod() {
        this.props.SetProgress(0)
        let urlfornews = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=28cff8f54a0345dbac5f05909f0961e9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(urlfornews);
        this.props.SetProgress(30)
        let parseddata = await data.json();
        this.props.SetProgress(50)

        this.setState({
            articles: parseddata.articles,
            totalarticles: parseddata.totalResults,
            loading: false,
        })
        this.props.SetProgress(100)


    }

    async componentDidMount() {

        // let urlfornews = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=28cff8f54a0345dbac5f05909f0961e9&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(urlfornews);
        // let parseddata = await data.json();

        // this.setState({
        //     articles: parseddata.articles,
        //     totalarticles: parseddata.totalResults,
        //     loading: false
        // })
        this.updatemethod();
    }

    preveventhandlar = async () => {
        // let urlfornews = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=28cff8f54a0345dbac5f05909f0961e9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(urlfornews);
        // let parseddata = await data.json();
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parseddata.articles,
        //     loading: false
        // })
        await this.setState({ page: this.state.page - 1 })
        this.updatemethod();
    }

    nexteventhandlar = async () => {
        // if (this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pageSize)) {

        // } else {

        //     let urlfornews = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=28cff8f54a0345dbac5f05909f0961e9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true })
        //     let data = await fetch(urlfornews);
        //     let parseddata = await data.json();
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parseddata.articles,
        //         loading: false
        //     })

        // }
        await this.setState({ page: this.state.page + 1 }) //it waits to finish the updating page value before moving to next line updatenews is called before page is increased or decreased
        this.updatemethod();

    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })

        let urlfornews = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=ce6b276c93a24629a064b466ac730468&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: false })
        let data = await fetch(urlfornews);
        let parseddata = await data.json();

        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
            totalarticles: parseddata.totalResults,
            loading: false,
        })
    };
    render() {
        return (
            <div className='container my-3'>
                <h1>News Monkey</h1>
                {this.state.loading && < Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalarticles}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element, index) => {
                                return <div className="col-md-4" key={index} >
                                    <Newsitem title={element.title ? element.title.slice(0, 20) : "My Title"} description={element.description ? element.description.slice(0, 70) : "My description"} imageurl={element.urlToImage} detailurl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= "1"} type="button" className="btn btn-dark" onClick={this.preveventhandlar}>Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nexteventhandlar}>Next</button>
                </div> */}
            </div >

        )
    }
}

export default News
