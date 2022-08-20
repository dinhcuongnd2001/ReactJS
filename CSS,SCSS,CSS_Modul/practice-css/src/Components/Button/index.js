import styles from './Button.module.css'
import clsx from 'clsx'
function Button({primary}) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary
    })
    return (
        <button
            className= {classes}
        >
            Click Me !
        </button>
    )
}

export default Button;