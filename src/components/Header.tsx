
import Goat from "../assets/images/goatius.png";
import {useDarkTheme} from "../hooks/useDarkTheme";

const Header = () => {
    const {toggleTheme} = useDarkTheme();

  return (
    <div className='flex items-center gap-4 mb-2'>
        <p className='text-4xl font-bold'>GOAT <span className='text-[#f67216]'>SPEAK</span></p>
        <img onClick={toggleTheme}
            className='w-20' src={Goat} alt="goat logo" />
    </div>
  )
}

export default Header