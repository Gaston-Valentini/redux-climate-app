import style from  "./Contact.module.css";

export default function Contact() {
    return (
        <div className={style.contact}>
            <p className={style.contactDesigned}>Desarrollado por <a href="https://github.com/Gaston-Valentini">Gastón Valentini</a></p>
            <a href="https://github.com/Gaston-Valentini/redux-climate-app" className={style.contactRepository}>Clickee en este enlace para ir al repositorio del proyecto</a>
        </div>
    )
}