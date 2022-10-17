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

    const changeMenu = () => {
        setState({
            ...state,
            menu: !state.menu,
        });
    }
    const changeCategories = () => {
        setState({
            ...state,
            categories: !state.categories,
        });
    }

    const changeMyOrden = () => {
        setState({
            ...state,
            myOrden: !state.myOrden,
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

    return {
        state,
        addToCart,
        removeFromCart,
        changeMenu,
        changeCategories,
        changeMyOrden,
        closeModal
    }
}

export default useInitialState;