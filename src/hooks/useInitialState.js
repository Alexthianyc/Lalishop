import {useState} from 'react';

const initialState = {
    cart: [],
    categories: false,
    menu: false,
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

    return {
        state,
        addToCart,
        removeFromCart,
        changeMenu,
        changeCategories,
    }
}

export default useInitialState;