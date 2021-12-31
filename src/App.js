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
              <div className="container">
                
                  <div className="card">
                    <div className="image">
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                  <div className="card">
                    <div className="image">
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                  <div className="card">
                    <div className="image">
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                  <div className="card">
                    <div className="image">
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                  <div className="card">
                    <div className="image">
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
                  <div className="card">
                    <div className="image">
                      <img src={process.env.PUBLIC_URL + "/loading.webp"} className="card-img-top opacity-50" alt="..."/>
                      <h2>ZeroTwo</h2>
                    </div>
                    <div className="content">
                      <h3>JUFFLER</h3>
                    </div>
                  </div>
              </div>
            </>
               
              );
        }else{
            return (
                <>
                  <div className="container">
                    {items.map((element) => {
                      return (
                        <>
                          <div className="card ">
                            <div className="image">
                              <img href="#" src={element.image} />
                              <iframe  id = "myiframe"src={element.trailer_url} frameBorder="0" ></iframe>
                              <h2>{element.name}</h2>
                            </div>
                            <div className="content">
                                    <a target = "blank" href = {element.download_url} class="btn btn-success">Download</a>
                                    <div className="lists">
                                      <ul>
                                        <li>*IMDB : {element.imdb}</li>
                                        <li>Age_res :{element.age_res}</li>
                                      </ul>
                                      <ul>
                                        <li>Labels: {element.labels}</li>
                                        <li>Qualities : {element.qualities}</li>
                                      </ul>
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






