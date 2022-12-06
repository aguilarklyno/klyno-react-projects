import React from 'react'
import Moment from 'react-moment'
import "moment-timezone"

const Time = () => {

    let today = new Date()

    let greeting = () => {
      if (today.getHours() >= 5 && today.getHours() < 11) {
        return "Good Morning, Clint."
      } else if (today.getHours() >= 11 && today.getHours() < 17) {
        return "Good Afternoon, Clint."
      } else if (today.getHours() >= 17 && today.getHours() < 24) {
        return "Good Evening, Cling."
      } else {
        return "What are you doing up at this hour?"
      }
    }

  return (
    <div>
      <p><Moment></Moment></p>
      <p>{greeting()}</p>
    </div>
  )
}

export default Time