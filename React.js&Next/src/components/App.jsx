import React, {Component} from "react"
import {useState} from "react"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter:0,
      msg:"count start",
      flg:true,
    }

    this.doAction = this.doAction.bind(this)
    }

    doAction(e){
      this.setState({
        counter: this.state.counter + 1,
        msg: this.state.counter,
        flg: !this.state.flg
      })
    }





    
    render(){
      return(
        <div>
          <h1>React</h1>
          <div>
            <p>Count number</p>
            {this.state.flg ?
              <div>
                <p>count: {this.state.msg}</p>
              </div>
            :
              <div>
                <p>{this.state.msg}です。</p>
              </div>
            }
            <div>
              <button onClick={this.doAction}>
                Click
              </button>
            </div>
          </div>
        </div>)

// 4-3 --------------------------------------------------------------------------------------------------
//






// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------






  }
}

export default App