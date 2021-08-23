import * as actionTypes from "./shopping-actions";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Provider Pole Beans",
      description:
        "Tender green bean, excellent flavor and is one of the best for freezing and canning. $4/lb",
      price: 4.0,
      image:
        "https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwfddaae29/images/products/vegetables/00010g_01_provider.jpg?sw=280&cx=302&cy=0&cw=1196&ch=1196https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Microgreens Mild Mix",
      description:
        "The perfect microgreens salad mix.  Kale, Broccolli, Arugula, and Micro-Lettuce. Perfect for salads, and sandwiches. $5/box",
      price: 5.0,
      image:
        "https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw78ba8a09/images/products/vegetables/02566_01_mildmix.jpg?sw=280&cx=477&cy=94&cw=1000&ch=100019865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Sunflower Microgreens",
      description:
        "Sunflower micro greens are our all-time favorite microgreen! They are large, substantial greens that are crunchy and have a pleasant nutty flavor. We love to use them as a base for any microgreens salad. They make an excellent snack and your kids will even try to sneak them!. $6/box",
      price: 6.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6IBcaZ3OXsv26VWdkogsrG9Smht6kxdsTg&usqp=CAU",
    },
    {
        id: 4,
        title: "Red Amaranth Microgreens ",
        description:
          "Attractive fuchsia stems and leaves.  Mild, earthy flavor and very unique color. Will definitely brighten all your salads, and sandwiches. $6/box",
        price: 6.0,
        image:
          "https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw2cd448d6/images/products/vegetables/02247mg_04_garnet_red.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196",
      },
      {
        id: 5,
        title: "Red Russian Kale Microgreens ",
        description:
          "Check out this vibrant kale microgreen with dark green leaves and variegated stems of pink, floral purple, and at times, bright red. It has a consistent flavor compared to other kale microgreens: nutty and robust—similiar to mustard, only less spicy!. $5/box",
        price: 5.0,
        image:
          "https://i.pinimg.com/236x/44/70/48/447048efcf69ed99096c7464a1d45442--microgreens-kale.jpg",
      },
    {
      id: 6,
      title: "Organic Cherry Tomato Box",
      description:
        "A bright mix of the Gnom3's favorite mini tomatoes. $7/box",
      price: 7.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FZlJd5dGeKpe9tz6pW0faM9hbhbcAKlcUw&usqp=CAU",
    },
    {
      id: 7,
      title: "Organic Swiss Chard",
      description:
        "The gold standard for multicolored Swiss chard. Nicely savoyed and glossy green or bronze leaves with stems of gold, pink, orange, purple, red, and white with bright, pastel, and multicolored variations. $4/box",
      price: 7.0,
      image:
        "https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw224c0d14/images/products/vegetables/00703d_01_brilights.jpg?sw=387&cx=396&cy=84&cw=1000&ch=1000",
    },
    {
      id: 8,
      title: "Organic Red Russian Kale",
      description:
        "Smooth green, purple-veined leaves for baby leaf and bunching.  Stems are a beautfiful purple; leaves are flat and toothes with purple veins.   $4/box",
      price: 7.0,
      image:
        "https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwd35a4799/images/products/vegetables/00363_01_redrussian.jpg?sw=387&cx=418&cy=52&cw=1026&ch=1026",
    },
    {
        id: 9,
        title: "Organic Russian 117 Tomato",
        description:
          "HEIRLOOM. A bright mix Popular family heirloom from Russia. Indeterminate, regular leaf plant with wispy foliage produces an abundant crop of beautiful 1-2 lb., red, oxheart tomatoes. Unique because of the unusual double heart-shaped form of its fruit. $4/lb ",
        price: 4.0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2sJDwCuOROc_RU7P8bTR2nh6_8ZUYR3zrMA&usqp=CAU HBocHBwcHBocGh0aGRocHhocIS4lHh4rIR4aJjgnKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHxISHzQsJCs0NDQ2ND00NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP",
      },
      {
        id: 10,
        title: "Black Krim Tomato",
        description:
          "HEIRLOOM. Medium-sized, very dark maroon beefsteak, with wonderfully rich flavor. This medium-sized, very dark maroon beefsteak, with wonderfully rich flavor, originated in Crimea, a peninsula in the Black Sea with perfect tomato summers. $4/lb",
        price: 4.0,
        image:
          "https://www.edenbrothers.com/store/media/Seeds-Vegetables/resized/SVTOM135-1_medium.jpg",
      },
      {
        id: 11,
        title: "Amish Paste Tomato",
        description:
          "HEIRLOOM. A longtime favorite heirloom plum.  Large for a sauce tomato, Amish Paste's slightly irregular plum to strawberry-shaped fruits avg. 8-12oz. with excellent flavor. $4/lb",
        price: 4.0,
        image:
          "https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw3a9ce248/images/products/vegetables/03817g_01_amishpaste.jpg?sw=387&cx=6&cy=0&cw=1196&ch=1196",
      },
      {
        id: 12,
        title: "Katrina Cucumber",
        description:
          "A small, tasty snacking cucumber. Great for packing in lunches.  The Gnome's personal favorite. $4/lb",
        price: 4.0,
        image:
          "https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw91ee707f/images/products/vegetables/0047g_01_katrina.jpg?sw=387&cx=216&cy=0&cw=1196&ch=1196",
      },
      {
        id: 13,
        title: "Lemon Cucumber",
        description:
          "Heirloom. Round and yellow, this tennis ball-sized cucumber is a perfect serving for one or two people. It is believed to have been introduced to the US in the late 1800s. Lemon cucumber does not have a lemon taste, only color, but has a thin, tender skin with a flavor a little milder than a regular cucumber’s. $5/lb",
        price: 5.0,
        image:
          "https://www.everwilde.com/media/1000/Lemon-Slicing-Cucumber-Seeds-01.gif",
      },
      
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const itemInCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: itemInCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.PLACE_YOUR_ORDER:
      return {
        
      }
    default:
      return state;
  }
};

export default shopReducer;
