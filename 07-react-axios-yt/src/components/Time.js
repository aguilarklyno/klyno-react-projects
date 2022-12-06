import React from 'react'
import Moment from 'react-moment'
import "moment-timezone"

const Time = () => {


  return (
    <div>
      <p><Moment format="LT"></Moment></p>
    </div>
  )
}

export default Time