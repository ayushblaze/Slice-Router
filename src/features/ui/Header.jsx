import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-400 uppercase px-4 py-3 border-b border-stone-500">
      <Link to='/' className="tracking-widest">SliceRouter</Link>
      <SearchOrder />
      <Username />
    </header>
  )
}

export default Header;