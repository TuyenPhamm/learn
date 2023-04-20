
import { useContext } from "react"
import { ThemeContext } from "../App"
function Paragraph() {
    const theme = useContext(ThemeContext)
    return (
        <p className={theme} > Test useContent </p >
    )
}
export default Paragraph 