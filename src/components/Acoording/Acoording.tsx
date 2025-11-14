import React, { useState } from "react";
import "./Acoording.css";

const data = [
    { question: "¿Cuál es la filosofía principal de Inmobiliaria Ágora?", answer: "En Inmobiliaria Ágora, nuestra filosofía es ayudar a las personas a construir su futuro ofreciendo servicios integrales en la venta, compra y alquiler de viviendas. Nos comprometemos a ser el puente que facilita el camino hacia un nuevo hogar y una nueva vida." },
    { question: "¿Qué tipos de propiedades maneja Inmobiliaria Ágora?", answer: "Gestionamos una amplia variedad de propiedades, desde apartamentos y casas familiares hasta terrenos y locales comerciales. Nuestra diversidad nos permite adaptarnos a las necesidades únicas de cada cliente." },
    { question: "¿Pregunta 3?", answer: "Respuesta detallada de la pregunta 3." },
    { question: "¿Pregunta 4?", answer: "Respuesta detallada de la pregunta 4." },
    { question: "¿Pregunta 5?", answer: "Respuesta detallada de la pregunta 5." },
    { question: "¿Pregunta 6?", answer: "Respuesta detallada de la pregunta 6." },
    { question: "¿Pregunta 7?", answer: "Respuesta detallada de la pregunta 7." },
    { question: "¿Pregunta 8?", answer: "Respuesta detallada de la pregunta 8." },
    { question: "¿Pregunta 9?", answer: "Respuesta detallada de la pregunta 9." },
    { question: "¿Pregunta 10?", answer: "Respuesta detallada de la pregunta 10." }
];

export default function AccordionGrid() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="accordion-wrapper">
            <h2 className="accordion-title">Preguntas frecuentes</h2>

            <div className="accordion-grid">
                {data.map((item, index) => {
                    const open = index === openIndex;

                    return (
                        <div
                            key={index}
                            className={`accordion-card ${open ? "open" : ""}`}
                            onClick={() => setOpenIndex(open ? null : index)}
                        >
                            <div className="accordion-question">
                                <span>{item.question}</span>
                                <span className={`arrow ${open ? "open" : ""}`}>▼</span>
                            </div>

                            <div className={`accordion-answer ${open ? "show" : ""}`}>
                                {item.answer}
                            </div>
                        </div>

                    );
                })}
            </div>
        </div>
    );
}
