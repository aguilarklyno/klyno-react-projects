import React from 'react'

const Date = () => {

  let today = new Date();
  console.log(today)
  let date = today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate()

  return (
    <div>
      <p>{date}</p>
    </div>
  )
}

export default Date