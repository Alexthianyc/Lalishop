import {useState} from 'react';

const initialState = {
    cart: [],
    categories: false,
    menu: false,
    myOrden: false,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        });
    }

    const closeModal = () => {
        setState({
            ...state,
            menu: false,
            categories: false,
            myOrden: false,
        });
      };
      const mostrarCategories = () => {
        setState({
            ...state,
            menu: false,
            categories: !state.categories,
            myOrden: false,
        });
      };
      const mostrarMenu = () => {
        setState({
            ...state,
            menu: !state.menu,
            categories: false,
            myOrden: false,
        });
      };
      const mostrarMyOrder = () => {
        setState({
            ...state,
            menu: false,
            categories: false,
            myOrden: !state.myOrden,
        });
      };

    return {
        state,
        addToCart,
        removeFromCart,
        mostrarMenu,
        mostrarCategories,
        mostrarMyOrder,
        closeModal
    }
}

export default useInitialState;