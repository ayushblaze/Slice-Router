import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to='/'>SliceRouter</Link>
      <SearchOrder />
      <p>Ayush Singh</p>
    </header>
  )
}

export default Header;