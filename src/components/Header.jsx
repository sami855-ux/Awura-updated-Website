import { useState } from "react"
import PropTypes from "prop-types"

import { FaBarsStaggered } from "react-icons/fa6"
import Logo from "../assets/logo.png"
import ButtonTwo from "../ui/ButtonTwo"

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className="w-full h-16 flex items-center px-4 md:px-20 justify-between lg:pr-36 relative">
        <div className="w-fit h-full flex items-center justify-center gap-2">
          <img src={Logo} alt="Logo for awura company" className="w-12 h-12" />
          <p className="font-semibold text-blue-950 text-xl">Awura Company</p>
        </div>

        <ul className="w-fit h-full  items-center space-x-3 justify-center hidden md:flex">
          <Link text="Home" />
          <Link text="About us" />
          <Link text="Services" />
          <Link text="Contact" />
          <Link text="Info" />
        </ul>

        <div className="w-fit h-full flex justify-center items-center md:hidden relative z-20 ">
          <FaBarsStaggered
            size={22}
            cursor="pointer"
            onClick={() => {
              setShowMenu((curr) => !curr)
            }}
          />
        </div>
        <div className="w-fit h-full hidden items-center justify-center space-x-5 justify-self-end ml-20 lg:flex">
          <ButtonTwo />
        </div>
      </div>
      {showMenu && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-0 bg-gray-900/75"
          onClick={() => {
            setShowMenu((curr) => !curr)
          }}
        ></div>
      )}
      {showMenu && <MobileMenu />}
    </>
  )
}

const MobileMenu = () => {
  return (
    <div className="absolute top-16 w-full h-96 bg-white z-10 flex flex-col items-center justify-center space-y-5 list-none border rounded-b-lg">
      <Link text="Home" />
      <Link text="About us" />
      <Link text="Services" />
      <Link text="Contact" />
      <Link text="Info" />
    </div>
  )
}

const Link = ({ text }) => {
  return <li className="text-sm mx-3 cursor-pointer text-gray-800">{text}</li>
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
}
