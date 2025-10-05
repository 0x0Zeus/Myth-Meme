import Hero from "@/components/Home/Hero"
import CharacterShowcase from "@/components/Characters/CharacterShowcase"
import LatestNews from "@/components/Home/LatestNews"
import Posts from "@/components/Home/Posts"

const HomePage = () => {
  return (
    <div className="font-inter">
      <Hero />
      <CharacterShowcase />
      <LatestNews />
      <Posts />
    </div>
  )
}

export default HomePage