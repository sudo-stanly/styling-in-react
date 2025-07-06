// import styles from './Button/Button.module.css'

function Button() {

  const styles={
  //  backgroundColor: "red",
      
        width: "15rem",
        height: "5rem",
        borderRadius: "16px",
        border: "1px solid black",

        boxShadow: "-2px 2px 0px 1px",
        
        backgroundColor: "rgb(19, 235, 19)",
        textAlign: "center",
        fontSize: "1rem",
        cursor: "pointer",
  }

  return (
    <>
        {/* <button className="Button">Click me</button> */} {/* External CSS */}
        {/* <button className={styles.Button}>Click me</button> */} {/* Module CSS */}
        <button style={styles}>Click me</button> {/**/}
    </>
  )
}

export default Button