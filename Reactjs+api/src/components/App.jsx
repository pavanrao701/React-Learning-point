import React, {Component} from 'react';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      data:[],
      }

    }

  componentDidMount()
  {
      fetch('http://facebook.github.io/react-native/movies.json').
      then((Response)=>Response.json()).
      then((findresponse)=>
    {
       console.log(findresponse.movies)
       this.setState({
         data:findresponse.movies,
       }
     )
    })
  }

render(){
  return(
    <div>
      {
        this.state.data.map((dynamicData,key) =>
        <div>
       <span> {dynamicData.title} </span>
       <span> {dynamicData.releaseYear} </span>
          </div>      
      )
    }
</div>

);
}
}

export default App