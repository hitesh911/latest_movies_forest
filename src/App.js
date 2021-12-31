import './App.css';
import Axios from 'axios'


import React , {Component} from 'react';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [],
            isloaded : false,
        }
    }
    componentDidMount(){
        Axios({
            url: "https://juffler-database-api.herokuapp.com/read?key=JUFFLER_GEEKS",
            method: 'get',
        }).then(res => res.data)
        .then(movies_data => {
            this.setState({
                isloaded : true,
                items : movies_data,
            })
        }).catch(err => {
          this.setState({
            isloaded : false,
            items : [],
        })
        }

        )
        
    }
   render(){
        var {isloaded , items} = this.state
        if(!isloaded){
          
          return (
            <>
              <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-1">
                <div className="col mb-3">
                  <div className="card ">
                    <div className="image card-body">
                  
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                </div>  

                <div className="col mb-3">
                  <div className="card ">
                    <div className="image card-body">
                  
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                </div>  
                

                <div className="col mb-3">
                  <div className="card ">
                    <div className="image card-body">
                  
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                </div>  

                <div className="col mb-3">
                  <div className="card ">
                    <div className="image card-body">
                  
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                </div>  

                <div className="col mb-3">
                  <div className="card ">
                    <div className="image card-body">
                  
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                </div>  

                <div className="col mb-3">
                  <div className="card ">
                    <div className="image card-body">
                  
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                </div>  

                <div className="col mb-3">
                  <div className="card ">
                    <div className="image card-body">
                  
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                </div>  

                <div className="col mb-3">
                  <div className="card ">
                    <div className="image card-body">
                  
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                </div>  

                <div className="col mb-3">
                  <div className="card ">
                    <div className="image card-body">
                  
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                </div>  

              </div>
            </>
               
              );
        }else{
            return (
                <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <div class="container-fluid ">
        <a class="navbar-brand" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
          </svg>
          Shopcart</a>
        <div class=" navbar-collapse" id="navbarSupportedContent">
          <!--search bar-->
          <div id = "search_bar" class = "border bg-light shadow rounded ">
            <form class="d-flex justify-content-around">
              <input id = "search_input"class=" mx-2 px-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-primary border-top border-bottom rounded-pill" type="submit">Search</button>
            </form>
          </div>
          <ul class="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0 ">
            <li class="nav-item mx-2">
              <a class="nav-link active " aria-current="page" href="#">Category</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">Wish list</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">Deals</a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Owner</a>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
                <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-1">
                    {items.map((element) => {
                      return (
                        <>
                          <div className=" col mb-3">
                          <div className="card  ">
                            <div className="image card-body ">
                              <img href="#" src={element.image} />
                              <iframe  id = "myiframe"src={element.trailer_url} frameBorder="0" ></iframe>
                               <div className = " text-center text-wrap mb-3">
                                  <h2 >{element.name}</h2>
                               </div>
                            </div>
                            <div className="content">
                                    <a target = "blank" href = {element.download_url} class="btn btn-success">Download</a>
                                    <div className="lists">
                                      <ul>
                                        <li>*IMDB : {element.imdb}</li>
                                        <li>Age_res :{element.age_res}</li>
                                        <li>Labels: {element.labels}</li>
                                        <li>Qualities : {element.qualities}</li>
                                      </ul>
                                    </div>
                              
                            </div>
                          </div>
                        
                      </div>
                        </>
                      );
                    }).reverse()}
                  </div>
                
                </>
              );
        }
       
    
   }
}
export default App;






