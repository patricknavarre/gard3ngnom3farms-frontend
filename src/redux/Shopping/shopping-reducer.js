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
        title: "Microgreens Red Amaranth",
        description:
          "Attractive fuchsia stems and leaves.  Mild, earthy flavor and very unique color. Perfect for salads, and sandwiches. $5/box",
        price: 5.0,
        image:
          "https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw2cd448d6/images/products/vegetables/02247mg_04_garnet_red.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196",
      },
    {
      id: 4,
      title: "Organic Cherry Tomato Box",
      description:
        "A bright mix of the Gnom3's favorite mini tomatoes. $7/box",
      price: 7.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FZlJd5dGeKpe9tz6pW0faM9hbhbcAKlcUw&usqp=CAU",
    },
    {
        id: 5,
        title: "Organic Russian 117 Tomato",
        description:
          "HEIRLOOM. A bright mix Popular family heirloom from Russia. Indeterminate, regular leaf plant with wispy foliage produces an abundant crop of beautiful 1-2 lb., red, oxheart tomatoes. Unique because of the unusual double heart-shaped form of its fruit. $4/each ",
        price: 4.0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2sJDwCuOROc_RU7P8bTR2nh6_8ZUYR3zrMA&usqp=CAU HBocHBwcHBocGh0aGRocHhocIS4lHh4rIR4aJjgnKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHxISHzQsJCs0NDQ2ND00NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP",
      },
      {
        id: 6,
        title: "Black Krim Tomato",
        description:
          "HEIRLOOM. Medium-sized, very dark maroon beefsteak, with wonderfully rich flavor. This medium-sized, very dark maroon beefsteak, with wonderfully rich flavor, originated in Crimea, a peninsula in the Black Sea with perfect tomato summers. $4/each",
        price: 4.0,
        image:
          "https://www.edenbrothers.com/store/media/Seeds-Vegetables/resized/SVTOM135-1_medium.jpg",
      },
      {
        id: 7,
        title: "Amish Paste Tomato",
        description:
          "HEIRLOOM. A longtime favorite heirloom plum.  Large for a sauce tomato, Amish Paste's slightly irregular plum to strawberry-shaped fruits avg. 8-12oz. with excellent flavor. $4/lb",
        price: 4.0,
        image:
          "https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw3a9ce248/images/products/vegetables/03817g_01_amishpaste.jpg?sw=387&cx=6&cy=0&cw=1196&ch=1196",
      },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Getting the item data from the products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Checking to see if item is in cart already
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
