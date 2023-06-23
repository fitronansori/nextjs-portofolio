import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, quae!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Lorem, ipsum dolor.</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus
          debitis aliquam, quisquam obcaecati commodi totam sequi quidem
          provident magni, placeat veniam, unde deleniti architecto fugiat error
          veritatis. Et nostrum, eaque at beatae saepe consequatur, vel rem
          nulla ducimus, eum deserunt ullam reiciendis esse? Molestias, ipsa
          expedita laborum recusandae vel sit quisquam dignissimos neque
          officiis natus nesciunt tenetur minima veniam consectetur similique
          corrupti cumque odit, suscipit vero temporibus voluptatibus eos? Id
          eligendi velit, distinctio enim perferendis blanditiis cupiditate
          expedita natus culpa aliquid temporibus nihil deserunt tempore
          excepturi vel eveniet voluptates cum. In qui nesciunt nihil, explicabo
          porro dignissimos corrupti earum.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
