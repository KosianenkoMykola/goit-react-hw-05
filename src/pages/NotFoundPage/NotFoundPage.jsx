import { Link } from "react-router-dom";
import css from "../NotFoundPage/NotFoundPage.module.css"

export default function NotFoundPage() {
    return (
        <div className={css.container}>
            <h1 className={css.title}>404</h1>
            <p className={css.text}>Page Not Found</p>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}