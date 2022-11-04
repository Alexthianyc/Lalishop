import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import styles from '@styles/contactUs.module.scss';

const aboutUs = () => {
    const Router = useRouter();
    const form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            email: formData.get('email'),
            name: formData.get('name'),
            message: formData.get('message'),
        };
        if (data.email == '' || data.name == '' || data.message == '') {
            Swal.fire('Debes llenar todos los campos');
        } else {
            Swal.fire('Mensaje enviado');
            Router.push('/');
        }
    };
    return (
        <div className={styles.aboutUs}>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mr-auto">
                            <h2>Contactanos</h2>
                            <ul className="list-unstyled pl-md-5 mb-5">
                                <li className="d-flex text-black mb-2">
                                    <span className="mr-3">
                                        <span className="icon-map"></span>
                                    </span>{' '}
                                    La Unión, La Unión, El Salvador.
                                </li>
                                <li className="d-flex text-black mb-2">
                                    <span className="mr-3">
                                        <span className="icon-phone"></span>
                                    </span>{' '}
                                    +503 7969-2507
                                </li>
                                <li className="d-flex text-black">
                                    <span className="mr-3">
                                        <span className="icon-envelope-o"></span>
                                    </span>{' '}
                                    lalishop_official@gmail.com{' '}
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <form className="mb-5" id="contactForm" name="contactForm" ref={form}>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="name" className="col-form-label">
                                            Nombre
                                        </label>
                                        <input type="text" className="form-control" name="name" id="name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="email" className="col-form-label">
                                            Email
                                        </label>
                                        <input type="text" className="form-control" name="email" id="email" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="message" className="col-form-label">
                                            Mensaje
                                        </label>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            id="message"
                                            cols="30"
                                            rows="7"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input
                                            onClick={handleSubmit}
                                            value="Enviar mensaje"
                                            className="btn btn-dark rounded-0 py-2 px-4 mt-2"
                                        />
                                        <span className="submitting"></span>
                                    </div>
                                </div>
                            </form>
                            <div id="form-message-warning mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default aboutUs;
