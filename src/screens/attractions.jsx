import React from "react"
import Card from "../components/card"

const Attractions = () => {
  const attractions = [
    {
      title: "Castle",
      description: "A historic castle with stunning architecture.",
      image: "https://via.placeholder.com/300", // Substitua por uma imagem real
    },
    {
      title: "Market Square",
      description: "The heart of Zakliczyn, bustling with activity.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Krzysztof Penderecki European Music Center",
      description: "A cultural hub for music enthusiasts.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "River",
      description: "Scenic river views perfect for relaxation.",
      image: "https://via.placeholder.com/300",
    },
  ]

  return (
    <div style={styles.container}>
      <h1>Top Attractions in Zakliczyn</h1>
      <div style={styles.grid}>
        {attractions.map((attraction, index) => (
          <Card
            key={index}
            title={attraction.title}
            description={attraction.description}
            image={attraction.image}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}

export default Attractions