import style from "../styles/Quadrados.module.css"

export default function Tabuleiro(props) {
    return (
        <div>
            <div
                className={style.quadrado}
                style={{
                    background: props.preto ? "#000" : "#fff"
                }}
            ></div>
        </div>
    )
}