import React,{Component} from 'react'


class ClassMouse extends Component{

  constructor(props){
    super(props)
    this.state = {
      x:0,
      y:0
    }
  }

positionMouse= e => {
  this.setState({x:e.clientX, y:e.clientY})
}
  
    componentDidMount() {
     window.addEventListener('mousemove', this.positionMouse)
     console.log('updateded')
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.positionMouse)
    }
 render(){
   return(
     <div>
     x-{this.state.x}
     y-{this.state.y}
     </div>
   )
 }
}

export default ClassMouse ;