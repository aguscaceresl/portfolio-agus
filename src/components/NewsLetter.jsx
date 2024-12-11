import { useState, useEffect } from "react";
export default function NewsLetter(){

    const [news, setNews] = useState([]);
    const [numNews, setNumNews] = useState(2);

    async function fetchNews(){
        try{
            const res = await fetch('/data/news.json');
      
            if(!res.ok){
              throw new Error('Error al obtener los datos');
            }
      
            const articles = await res.json();

            console.log(articles);
            
            setNews(articles.articles.slice(0,numNews));
      
          } catch(error){
            console.error('Error:', error.message);
          }
    }

    function loadMore(){
        setNumNews(numNews+4);
    }

    useEffect(()=>{
        fetchNews()
    }, [numNews]);

    

    return(
            <div className="news-container">
              {news.map((article, index) => (
                <div key={index} className="news-item">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="news-image"
                  />
                  <div className="news-content">
                    <h3 className="news-title">{article.title}</h3>
                    <p className="news-description">{article.description}</p>
                    <a href={article.url} className="news-link" target="_blank" rel="noopener noreferrer">
                      Leer más
                    </a>
                  </div>
                </div>
              ))}
              {numNews<10? <button className="load-more-btn" onClick={loadMore}>
                Cargar más
              </button> : <p className="text-center text-light lead ">No hay mas notícias por ahora</p>}
            </div>
    );
}