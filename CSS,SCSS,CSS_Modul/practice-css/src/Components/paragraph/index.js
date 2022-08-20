import styles from  './paragraph.module.scss'

function Paragraph(){
    console.log(styles);
    return(
        <h1 className={styles.heading}>This is the Paragraph</h1>
    )
}

export default Paragraph;