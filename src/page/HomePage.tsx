import Hero from "@/components/Home/Hero"
import CharacterShowcase from "@/components/Characters/CharacterShowcase"

const HomePage = () => {
  return (
    <div className="font-inter">
      <Hero />
      <CharacterShowcase />
    </div>
  )
}

export default HomePage