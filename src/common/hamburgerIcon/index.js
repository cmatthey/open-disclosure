import React from "react"
import styles from "./styles.module.scss"

const hamburgerIcon = props => {
  return (
    <div
      className={styles.hamburgerShell}
      onClick={props.handleClick}
      onKeyUp={props.handleClick}
      role="button"
      tabIndex={0}
    >
      <div className={`${styles.top} ${props.menuIsOpen && styles.rotate}`} />
      <div
        className={`${styles.bottom} ${props.menuIsOpen && styles.rotateBack}`}
      />
    </div>
  )
}

export default hamburgerIcon
