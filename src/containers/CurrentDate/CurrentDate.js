import React from "react"

const CurrentDate = () => {
  let newDate = new Date()
  let date = newDate.getDate()
  let month = newDate.getMonth() + 1
  let year = newDate.getFullYear()

  const currentDay = `${date.toString()}.${month.toString()}.${year.toString()}`
  return (
    <div>
      <span>{currentDay}</span>
    </div>
  )
}

export default CurrentDate
