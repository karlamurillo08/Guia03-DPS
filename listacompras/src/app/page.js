import styles from "./page.module.css";
import Form from "../app/components/Form";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className="App">
                <div>
                    <p>
                        Lista de compras
                    </p>
                    <Form />
                </div>
            </div>
        </main>
    );
}
