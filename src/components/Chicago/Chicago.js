import Image from "../../assets/MarioAdrianA.jpg"
import styles from "./Chicago.module.css";

const Chicago = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Little Lemon</h2>
          <h3 className={styles.subtitle}>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            ad cumque labore recusandae vero a quas repellat perferendis
            sint? Dolorum, tempore ratione fugiat illum ullam officia
            aliquid delectus quos! Accusantium. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Maxime quibusdam fugit iure
            autem! Magnam animi laboriosam assumenda vero eos a dolores,
            itaque repellendus fuga ab, ipsam reiciendis non vitae ut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            quibusdam fugit iure autem! Magnam animi laboriosam assumenda
            vero eos a dolores, itaque repellendus fuga ab, ipsam reiciendis
            non vitae ut.
          </p>
        </div>
        <div className={styles.images}>
            <img
              src={Image}
              alt="Amario and Adrian"
            />
        </div>
      </div>
    </section>
  );
}

export default Chicago