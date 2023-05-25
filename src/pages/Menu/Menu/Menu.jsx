import { Helmet } from "react-helmet-async";
import menuImg from '../../../assets/menu/banner3.jpg';
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
