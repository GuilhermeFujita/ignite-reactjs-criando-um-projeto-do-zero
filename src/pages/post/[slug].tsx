import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <img src="/teste.png" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo</h1>
            <ul>
              <li>
                <FiCalendar />
                12 Mar 2021
              </li>
              <li>
                <FiUser />
                Guilherme Fujita
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>

          <article>
            <h2>Título seção</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              quos dicta veniam excepturi explicabo numquam laboriosam atque
              autem voluptate blanditiis ullam possimus, maxime magnam eum quae
              tempora perspiciatis voluptatibus adipisci qui quasi quidem
              reiciendis maiores debitis tenetur? <a href="#">teste</a>
              veritatis. Doloremque nulla nostrum minima aliquam asperiores.
              Corporis recusandae officiis quisquam commodi. Ex, aliquam hic aut
              iste fugit deserunt ducimus porro recusandae esse aliquid
              cupiditate <strong> libero incidunt</strong> nam vel ullam autem
              tenetur quo quidem est! Suscipit a debitis aliquam repudiandae!
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
