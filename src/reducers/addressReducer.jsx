export const initialState = {
  address: [],
  status: "default", //default,add,edit
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        status: "default",
        address: [...state.address, action.payload],
      };
    case "add":
      return { ...state, status: "add" };
    case "close":
      return { ...state, status: "default" };
    case "edit":
      return { ...state, status: "edit" };
    case "onEdit":
      return {
        ...state,
        status: "default",
        address: state.address.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
      };
    case "onDelete":
      return {
        ...state,
        status: "default",
        address: state.address.filter(
          (address) => address.id !== action.payload
        ),
      };
  }
};
