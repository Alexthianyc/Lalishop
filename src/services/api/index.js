const API = process.env.NEXT_PUBLIC_API_LALIS_HEROKU;

const endPoints = {
    products: {
        getProducts: () => `${API}/productos`,
        getProduct: (id) => `${API}/producto/${id}`,
    },
    categories: {
        getCategoriesList: () => `${API}/categorias`,
        getCategorie: (filtro) => `${API}/producto/categoria/${filtro}`,
    },
};

export default endPoints;
