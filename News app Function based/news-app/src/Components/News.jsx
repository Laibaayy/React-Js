import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [article, setarticle] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalarticles, settotalarticles] = useState(0)




    const updatemethod = async () => {
        props.SetProgress(0)
        let urlfornews = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=28cff8f54a0345dbac5f05909f0961e9&page=${page}&pageSize=${props.pageSize}`;
        setloading(true);
        let data = await fetch(urlfornews);
        props.SetProgress(30)
        let parseddata = await data.json();
        props.SetProgress(50)
        setarticle(parseddata.articles)
        settotalarticles(parseddata.totalResults)
        setloading(false)

        props.SetProgress(100)


    }


    useEffect(() => {
        updatemethod();
    }, [])




    const fetchMoreData = async () => {
        let urlfornews = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=ce6b276c93a24629a064b466ac730468&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        let data = await fetch(urlfornews);
        let parseddata = await data.json();

        setarticle(article.concat(parseddata.articles))
        settotalarticles(parseddata.totalResults)
        setloading(false)

    };

    return (
        <div className='container my-3'>
            <h1>News Monkey</h1>
            {loading && < Spinner />}
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalarticles}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {article.map((element, index) => {
                            return <div className="col-md-4" key={element.url} >
                                <Newsitem title={element.title ? element.title.slice(0, 20) : "My Title"} description={element.description ? element.description.slice(0, 70) : "My description"} imageurl={element.urlToImage} detailurl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </div >

    )
}


export default News

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "sports",

};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
};