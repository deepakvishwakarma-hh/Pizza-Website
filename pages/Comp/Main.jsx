// Filteration
import Styles from "../../styles/Home.module.css"
import { motion } from 'framer-motion'
export default function Inner({ toNext }) {
    return (
        <motion.main animate={{y : [1000, 0]}} transition={{ type: "spring", damping: 3, ease: [0.075, 0.82, 0.165, 1] }} >
            <div className={Styles.child_one}>
                <small>easy way to order your food <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF6D21" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg></small>
                <h1>Choosing Healthy and Freshy Food</h1>
                <p>Just confirm your order and enjoy our delicious fastest delivery.</p>
                <div>
                    <button onClick={() => {
                        toNext(1)
                    }}>Create Pizza</button>
                    {/* <button>Available Pizza</button> */}
                </div>
            </div>
            <div className={Styles.child_two}>
                <img src="https://media.istockphoto.com/photos/top-view-of-mix-pizza-with-mozzarella-cheese-sausage-and-kind-of-on-picture-id1293807517?b=1&k=20&m=1293807517&s=170667a&w=0&h=1fwbHUA-YEWp52JY55T4venGEIoJFl_nVw3DXWL8yNQ=" alt="none" />
            </div>
        </motion.main>
    )
}
