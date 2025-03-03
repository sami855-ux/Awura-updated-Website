import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="w-full h-screen flex px-30">
      <div className="w-1/2 h-full flex flex-col pt-20">
        <h2 className="font-semibold text-6xl">
          Every problem <br /> is an opportunity for a solution
        </h2>
        <p className="text-sm py-5 font-light mt-7">
          Unlock the full potential of your business with our cutting-edge
          software solutions. We streamline operations, enhance productivity,
          and drive innovation. <br /> <br />
          Join thousands of companies leveraging our technology to optimize
          performance and achieve sustainable growth. Let's build the future
          together!
        </p>
      </div>
      <ImageSection />
    </div>
  )
}

const ImageSection = () => {
  return (
    <div className="w-1/2 h-full flex justify-center items-center">
      <img src={hero} alt="HeroImage" className="w-full h-50vh" />
    </div>
  )
}

export default Hero
