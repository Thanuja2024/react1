import React, { Component } from 'react'

 class myForm extends Component {
    constructor(props){
        super(props)
        this.state={
            textValue:'',
            skillValue:'skill not selected'
        }
    }
    changeTextValue=(event)=>{
        this.setState({
            textValue:event.target.value
        })
    }
    changeSkillValue=(event)=>{
        this.setState({
            skillValue:event.target.value
        })
    }
    submitted=(event)=>{
        alert("form is submitted"+`${this.state.textValue}`)
    }
  render() {
    return (
      <div>myForm</div>
    )
  }
}

export default myForm