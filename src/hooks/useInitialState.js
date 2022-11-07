import { useState } from 'react';

const initialState = {
    cart: [],
    pedido: [],
    detalle: [],
    idPedido: '',
    categories: false,
    menu: false,
    myOrden: false,
    detalleIsOpen: false,
    isUserLogged: false,
    payment: false,
    endPointUser: 'https://lalishop.herokuapp.com/api/productos',
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    };
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((items) => items.id !== payload.id),
        });
    };
    const closeModal = () => {
        setState({
            ...state,
            menu: false,
            categories: false,
            myOrden: false,
            detalleIsOpen: false,
            payment: false,
        });
    };
    const toggleCategories = () => {
        setState({
            ...state,
            menu: false,
            myOrden: false,
            detalleIsOpen: false,
            payment: false,
            categories: !state.categories,
        });
    };
    const toggleMenu = () => {
        setState({
            ...state,
            categories: false,
            myOrden: false,
            detalleIsOpen: false,
            payment: false,
            menu: !state.menu,
        });
    };
    const toggleMyOrder = () => {
        setState({
            ...state,
            menu: false,
            categories: false,
            detalleIsOpen: false,
            payment: false,
            myOrden: !state.myOrden,
        });
    };
    const mostrarDetalle = (product) => {
        setState({
            ...state,
            categories: false,
            myOrden: false,
            detalleIsOpen: true,
            detalle: product,
        });
    };
    const togglePayment = () => {
        setState({
            ...state,
            payment: !state.payment,
        });
    };
    const cerrarDetalle = () => {
        setState({
            ...state,
            detalleIsOpen: false,
        });
    };
    return {
        state,
        addToCart,
        removeFromCart,
        toggleMenu,
        toggleCategories,
        toggleMyOrder,
        mostrarDetalle,
        cerrarDetalle,
        closeModal,
        togglePayment,
    };
};

export default useInitialState;
