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
          <img width="50" height="60" src={process.env.PUBLIC_URL + "/logo.jpg"}alt="..."/>
          Movies Forest</a>
        <div class=" navbar-collapse" id="navbarSupportedContent">
          <div id = "search_bar" class = "border bg-light shadow rounded ">
            <form class="d-flex justify-content-around">
              <input id = "search_input"class=" mx-2 px-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-primary border-top border-bottom rounded-pill" type="submit">Search</button>
            </form>
          </div>
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






