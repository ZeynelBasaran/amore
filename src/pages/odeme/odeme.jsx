
import Navbar from "../navbar/navbar"
import CardImage from "../odeme/cardImage"
import CardInfo from "../odeme/cardInfo"


const odeme = () => {

  
  return (
    <main className="bg-bg-main container flex p-12 gap-5">
      <Navbar />
      <CardInfo />
      <CardImage />
    </main>
  )
}

export default odeme