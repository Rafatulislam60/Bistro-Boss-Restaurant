

const MenuItems = ({item}) => {
    const {image, price, name, recipe}= item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-serif text-xl">{name}--------</h3>
                <p className="font-serif text-[#737373]">{recipe}</p>
            </div>
            <p className="text-yellow-400 text-lg font-semibold">${price}</p>
        </div>
    );
};

export default MenuItems;