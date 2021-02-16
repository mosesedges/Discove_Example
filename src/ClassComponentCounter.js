
import React, {Component} from 'react'


class ClassComponentCounter extends Component{

constructor(props){
  super(props)
  this.state = {
    count: 0,
    name:''
  }
}

componentDidMount(){
  document.title = `welcome ${this.state.count} ...`
}

componentDidUpdate(prevProps, prevState){

  if(prevState.count !== this.state.count){
    console.log('updated now')
    document.title = `welcome ${this.state.count} ...`
  } 
}

render(){
  return(

  <div>
  <input type="text" value={this.state.name}
  onChange={e=> this.setState({name:e.target.value})}/>
  <button onClick={()=> this.setState({count:this.state.count + 1 })}>Clicked {this.state.count} times</button>
  </div>
  )
}

}





export default ClassComponentCounter;
