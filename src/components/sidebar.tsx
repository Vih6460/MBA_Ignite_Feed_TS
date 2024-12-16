import { PencilLine } from "phosphor-react" 

import styles from "./sidebar.module.css"
import { Avatar } from "./avatar.jsx";

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1675800004995-4d5bb609916e?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        
            <div className={styles.profile}>
                <Avatar src="https://github.com/vih6460.png"/>
                <strong>Vinicius Oliveira</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}