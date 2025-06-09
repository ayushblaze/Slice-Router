import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { convertEurToInr } from "../../utilities/helpers";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  )
}

export async function loader() {
  const menu = await getMenu();
  
  // Convert Euro prices to Indian Rupees
  const menuWithInrPrices = menu.map(pizza => ({
    ...pizza,
    unitPrice: convertEurToInr(pizza.unitPrice)
  }));
  
  return menuWithInrPrices;
}

export default Menu;
