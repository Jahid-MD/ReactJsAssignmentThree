import React, { Component } from 'react';
import axios from 'axios'


class Movie extends Component {
    constructor(){
        console.log("constructor()")
        super()
        this.state={
            movies:[],
            filteredMovies:[],
        }
    }
    
   
     
    async componentDidMount(){
        const response =await axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        this.setState({movies:response.data.Search})
        this.setState({filteredMovies:this.state.movies})
        console.log(this.state.movies)
    }

    handlefilter=(e)=>{
      let filterData= this.state.movies.filter(item=>{
        return item.Title.toLowerCase().includes(e.target.value.toLowerCase() )
    })
       this.setState({filteredMovies:filterData})
    }
   
    render() {
        console.log(this.state.filteredMovies)
        
        return (
            <div>
                <form className="search" >
                 <input type="search" onChange={this.handlefilter} placeholder="Search for Movie Title....." />
                </form>
                <div className="movie-box">
                {this.state.filteredMovies.map(data=>{
                    return <>
                    <article className="movie">
                        <figure>
                            <img src={data.Poster}/>
                            <figcaption><h2 className="movie-title">{data.Title}</h2></figcaption>
                        </figure>
                    </article>
                    </>
                })}
                </div> 
            </div>
        );
    }
}

export default Movie;

