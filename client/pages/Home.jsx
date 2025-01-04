



import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../src/components/Navbar';

export const Home = () => {
  
  const [newsArticles, setNewsArticles] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const fetchNewsArticles = async (query) => {
    try {
      let currentDate = new Date().toJSON().slice(0, 10);
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&?from=${currentDate}&sortBy=publishedAt&apiKey=49b6d9d5c1fd4fc9ac8c9b863311af74`);
      const data = await response.json();
      setNewsArticles(data.articles); 
    } catch (error) {
      console.error('Error fetching news articles:', error);
    }
  };

  React.useEffect(() => {
   
    fetchNewsArticles("latest");
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="mb-4">Search Latest News</h1><div className='d-flex'>
        <input type="text" placeholder="Search News" className="form-control mb-4" onChange={(e)=>{setSearch(e.target.value)}} />
        <button className='btn btn-success' onClick={(e)=>{fetchNewsArticles(search)}}>Search</button>
        
        </div>
        <div className="row">
          {newsArticles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <img width="400px" height="230px" src={article.urlToImage} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title" style={{height:'72px', width:"400px"}}>{article.title}</h5>
                  <p className="card-text" style={{height:'140px', width:"400px"}}>{article.description}</p>
                  <a href={article.url} target='_blank' className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


