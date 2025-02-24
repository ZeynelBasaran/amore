import Navbar from "../navbar/navbar";
import SearchBar from "../mesajlar/components/searchbar"
import ChatPage from "../mesajlar/components/chatPage"

const Mesajlar = () => {
  return (
    <main className="bg-bg-main container flex p-12 gap-5">
      <Navbar />
      <SearchBar />
      <ChatPage />
    </main>
  )
}

export default Mesajlar;