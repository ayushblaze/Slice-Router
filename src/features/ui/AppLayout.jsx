import Header from "./Header";
import CartOverview from "../cart/CartOverview";
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  console.log("Navigation:", isLoading);

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />

      <main>
        {/* <h1>Content</h1> */}
        <Outlet />
      </main>
      
      <CartOverview />
    </div>
  )
}

export default AppLayout;