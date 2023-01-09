import React, { useState } from "react";

const Form = () => {
    const [registro, setRegistro] = useState(false);

    return (
        <div className="row container p-4">
            <div className="col-md-8"></div>
            <div className="col-md-4">
                <div className="mt-5 ms-5">
                    <h1> {registro ? `registro` : "Inicio sesion"} </h1>
                </div>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nombre completo:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingresar nombre"
                            id="nombre"
                        ></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Correo electronico:</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Ingresar email"
                            id="email"
                        ></input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Fecha de nacimiento:</label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Ingresar fecha"
                            id="fecha"
                        ></input>
                    </div>

                    <div className="mb-3">
                        <div class="form-floating">
                            <select
                                class="form-select"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                            >
                                <option selected>País de origen</option>
                                <option value="argentina">Argentina</option>
                                <option value="brasil">Brasil</option>
                                <option value="chile">Chile</option>
                                <option value="colombia">Colombia</option>
                                <option value="mexico">México</option>
                                <option value="peru">Perú</option>
                                <option value="uruguay">Uruguay</option>
                                <option value="venezuela">Venezuela</option>
                            </select>
                            <label for="floatingSelect">¿Cuál es tu país de origen?</label>
                        </div>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">¿Acepta los términos y condiciones?</label>
                    </div>

                    <hr></hr>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
