import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import { useRouter } from 'next/router';
import { auth } from '../firebase/initFirebase';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@styles/paymentGateway.module.scss';

const PaymentGateway = () => {
    const { state, toggleMyOrder, togglePayment } = useContext(AppContext);
    const user = auth.currentUser;
    const handleCancel = (e) => {
        e.preventDefault();
        togglePayment();
    };
    const handlePayment = (e) => {
        e.preventDefault();
        check();
    };
    const router = useRouter();
    const check = () => {
        if (state.cart.length > 0) {
            state.pedido = state.cart;
            state.cart = [];
            toggleMyOrder();
            sendOrder();
            router.push('/checkout');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay productos en el carrito',
            });
        }
    };
    const sendOrder = () => {
        const code = Math.random().toString(36).substring(0, 20);
        state.idPedido = user.uid + code;
        state.pedido.map((item) => {
            const data = {
                pedidos_id: user.uid + code,
                usuario_id: user.uid,
                producto_id: item.id,
                nombre_producto: item.nombre_producto,
                descripcion_producto: item.descripcion_producto,
                precio_producto: item.precio_producto,
                stock_producto: item.stock_producto,
                imagen_producto: item.imagen_producto,
            };
            const JSONdata = JSON.stringify(data);
            sendItem(JSONdata);
            // console.log(JSONdata);
        });
    };
    const sendItem = async (datosJSON) => {
        const endpoint = 'http://www.lalishop.shop/api/pedido';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: datosJSON,
        };
        const response = await fetch(endpoint, options);
        console.log(response.statusText);
    };
    return (
        <div className={styles.Payment}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4">
                        <div className="card-header py-3">
                            <div className="row mb-1">
                                <div className="col-10">
                                    <h5>Detalles de compra</h5>
                                </div>
                                <div className="col-1">
                                    <FontAwesomeIcon icon="fa-brands fa-cc-visa" />
                                </div>
                                <div className="col-1">
                                    <FontAwesomeIcon icon="fa-brands fa-cc-mastercard" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <h5 className="mb-4">Método de Pago</h5>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="checkoutForm3"
                                        checked
                                    />
                                    <label className="form-check-label fw-semibold" htmlFor="checkoutForm3">
                                        Tarjeta de crédito
                                    </label>
                                </div>
                                <div className="form-check mb-4">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="checkoutForm5"
                                    />
                                    <label className="form-check-label fw-semibold" htmlFor="checkoutForm5">
                                        Contra entrega
                                    </label>
                                </div>
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="formCardNumber"
                                                className="form-control"
                                                placeholder="Número de tarjeta"
                                                pattern="[0-9]{16}"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="formNameOnCard"
                                                className="form-control"
                                                placeholder="Nombre del titular"
                                                minlength="3"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-7">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="formExpiration"
                                                className="form-control"
                                                pattern="([0-9]{2}[/]?){2}"
                                                placeholder="Fecha de vencimiento(mm/aa)"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="formCVV"
                                                className="form-control"
                                                placeholder="Código de seguridad"
                                                pattern="[0-9]{3,4}"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="formNameOnCard"
                                                className="form-control"
                                                placeholder="Dirección de envío"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <button
                                        className="btn btn-primary btn-lg btn-block m-1 w-100"
                                        onClick={handlePayment}
                                    >
                                        Continuar pago
                                    </button>
                                    <button
                                        className="btn btn-danger btn-lg btn-block m-1 w-100"
                                        onClick={handleCancel}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentGateway;
