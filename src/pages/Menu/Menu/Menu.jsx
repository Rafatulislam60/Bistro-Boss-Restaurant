import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="Our menu"
        subTitle="WOULD YOU LIKE TO TRY A DISH?"
      ></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertImg}
        subTitle={
          "Decadent desserts to satisfy your sweet cravings. From luscious cakes to creamy treats, our desserts are a heavenly delight. Indulge yourself and order now!"
        }
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        img={pizzaImg}
        subTitle={
          "Delicious pizzas with a variety of mouthwatering toppings. Perfectly baked crusts. Guaranteed satisfaction. Order now and indulge your taste buds!"
        }
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title={"salad"}
        img={saladImg}
        subTitle={
          "Tantalizing soups and fresh salads, bursting with flavors and nutritious ingredients. Healthy and satisfying options to complement your meal. Order now and enjoy!"
        }
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soup}
        title={"soup"}
        img={soupImg}
        subTitle={
          "Hot, savory soups made with love. Rich flavors, comforting textures. From classic to exotic, our soups will warm your soul. Order now and savor the goodness!"
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
