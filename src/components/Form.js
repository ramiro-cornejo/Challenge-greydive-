import React, { useState } from "react";

const Form = () => {
    const [registro, setRegistro] = useState(false);

    return (
        <div className="row container p-4">
            <div className="col-md-8"></div>
            <div className="col-md-4">
                <div className="mt-5 ms-5">
                    <h1> {registro ? `registro` : "Formulario"} </h1>
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
                        <div className="form-floating">
                            <select
                                className="form-select"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                            >
                                <option value>País de origen</option>
                                <option value="argentina">Argentina</option>
                                <option value="brasil">Brasil</option>
                                <option value="chile">Chile</option>
                                <option value="colombia">Colombia</option>
                                <option value="mexico">México</option>
                                <option value="peru">Perú</option>
                                <option value="uruguay">Uruguay</option>
                                <option value="venezuela">Venezuela</option>
                            </select>
                            <label htmlFor="floatingSelect">¿Cuál es tu país de origen?</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">¿Acepta los términos y condiciones?</label>
                    </div>

                    <hr></hr>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">
                            {registro ? 'registrate' : 'Enviar'}
                        </button>
                    </div>
                </form>

                <div className="form-group">
                    <button className="btn btn-secondary mt-4 form-control" onClick={() => setRegistro(!registro)}>
                        {registro ? 'ya completaste el form? Ver respuestas' : 'no completaste el form? Registrate'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;
