import  { useState } from "react";
import "./Acoording.css";

const data = [
    { question: "¿Cuál es la filosofía principal de Inmobiliaria Ágora?", answer: "En Inmobiliaria Ágora, nuestra filosofía es ayudar a las personas a construir su futuro ofreciendo servicios integrales en la venta, compra y alquiler de viviendas. Nos comprometemos a ser el puente que facilita el camino hacia un nuevo hogar y una nueva vida." },
    { question: "¿Qué tipos de propiedades maneja Inmobiliaria Ágora?", answer: "Gestionamos una amplia variedad de propiedades, desde apartamentos y casas familiares hasta terrenos y locales comerciales. Nuestra diversidad nos permite adaptarnos a las necesidades únicas de cada cliente." },
    { question: "¿Cómo se diferencia Inmobiliaria Ágora en términos de servicio al cliente?", answer: "Nos destacamos por brindar un servicio personalizado y transparente. Nuestros agentes inmobiliarios están comprometidos en comprender las necesidades individuales de cada cliente, guiándolos a lo largo de todo el proceso con atención y profesionalismo." },
    { question: "¿Qué servicios adicionales ofrece Inmobiliaria Ágora además de la compra y venta de propiedades?", answer: "Además de las transacciones inmobiliarias, ofrecemos servicios de asesoría legal, gestión de trámites notariales, y asistencia en la obtención de financiamiento hipotecario. Queremos hacer que el proceso sea lo más fácil y libre de estrés posible para nuestros clientes." },
    { question: "¿Cómo asegura Inmobiliaria Ágora la calidad de las propiedades que gestiona?", answer: "Realizamos exhaustivas evaluaciones y verificaciones de cada propiedad antes de incluirla en nuestra cartera. Esto garantiza que las propiedades cumplan con estándares de calidad y estén en condiciones óptimas para nuestros clientes." },
    { question: "¿Inmobiliaria Ágora trabaja con propiedades en todas las ubicaciones?", answer: "Sí, operamos en diversas ubicaciones. Nuestro objetivo es brindar opciones en diferentes áreas para satisfacer las preferencias y necesidades individuales de nuestros clientes." },
    { question: "¿Cómo contribuye Inmobiliaria Ágora al bienestar de la comunidad?", answer: "Nos involucramos activamente en iniciativas comunitarias y colaboramos con organizaciones locales. Además, fomentamos prácticas sostenibles en la construcción y promovemos un enfoque consciente hacia el desarrollo inmobiliario." },
    { question: "¿Ofrece Inmobiliaria Ágora servicios de alquiler a corto plazo?", answer: "Sí, gestionamos alquileres a corto y largo plazo. Adaptamos nuestros servicios a las necesidades específicas de nuestros clientes, ya sea para una residencia temporal o a largo plazo." },
    { question: "¿Cómo aborda Inmobiliaria Ágora la evolución del mercado inmobiliario?", answer: "Mantenemos un equipo de expertos en el mercado inmobiliario que sigue de cerca las tendencias y cambios. Esto nos permite proporcionar asesoramiento informado y estratégico a nuestros clientes." },
    { question: "¿Cuál es el proceso tipico que sigue un cliente al trabajar con Inmobiliaria Ágora?", answer: "El proceso comienza con una consulta personalizada para entender las necesidades del cliente. Luego, ofrecemos opciones personalizadas, asistimos en la toma de decisiones, gestionamos trámites y cerramos transacciones de manera eficiente, asegurando una experiencia fluida y satisfactoria para cada cliente." }
];

export default function AccordionGrid() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="accordion-wrapper">
            <p className="accordion-textoMorado">Preguntas frecuentes</p>
            <h1 className="accordion-title">¿Cómo podemos ayudarle?</h1>
            <p className="accordion-texto">A continuación, le presentamos algunas de las preguntas más frecuentes entre nuestros clientes, que pueden ser de mucha ayuda para nuestros nuevos clientes:</p>

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
