import styles from "../styles/Linha.module.css"
import Quadrados from "./quadrados.jsx"

export default function Linha(props) {
    return (
        <div className={styles.linha}>
            <Quadrados preto={props.preto}  />
            <Quadrados preto={!props.preto} />
            <Quadrados preto={props.preto}  />
            <Quadrados preto={!props.preto} />
            <Quadrados preto={props.preto}  />
            <Quadrados preto={!props.preto} />
            <Quadrados preto={props.preto}  />
            <Quadrados preto={!props.preto} />
        </div>
    )
}