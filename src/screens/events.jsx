import React from "react"

const Events = () => {
  const seasons = ["Winter", "Spring", "Autumn", "Summer"]

  return (
    <div style={styles.container}>
      <h1>Events in Zakliczyn</h1>
      <p>Experience Zakliczyn across the seasons:</p>
      <ul>
        {seasons.map((season, index) => (
          <li key={index}>{season}</li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
}

export default Events