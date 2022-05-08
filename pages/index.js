import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";
import { useState, useMemo } from "react";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  const [sortDescending, setSortDescending] = useState(false);

  const sortList = useMemo(() => {
    if (!sortDescending) {
      return posts.sort((postA, postB) =>
        postA.properties.date.date.start < postB.properties.date.date.start
          ? -1
          : postA.properties.date.date.start > postB.properties.date.date.start
          ? 1
          : 0
      );
    } else {
      return posts.sort((postA, postB) =>
        postA.properties.date.date.start > postB.properties.date.date.start
          ? -1
          : postA.created_time < postB.created_time
          ? 1
          : 0
      );
    }
  }, [sortDescending]);

  return (
    <div>
      <Head>
        <title>📓 dlquff's BLOG </title>
        <link rel="icon" href="/favicon.ico" />
        <title>{`✨dlquff✨ 의 개발 블로그 : )`}</title>
        <meta name="description" content="✨dlquff✨ 의 개발 블로그 : )" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="📓 dlquff's BLOG " />
        <meta
          property="og:description"
          content="✨dlquff✨ 의 개발 블로그 : )"
        />
        <meta property="og:site_name" content="📓 dlquff's BLOG " />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="📓 dlquff's BLOG" />
        <meta
          property="twitter:description"
          content="✨dlquff✨ 의 개발 블로그 : )"
        />
      </Head>

      <main className={styles.container}>
        <div className={styles.titleWrap}>
          <h2>JavaScript | React</h2>
          <p>프론트엔드 공부를 시작하며 중요하다 싶은 내용을 주제로</p>
          <p>필수적으로 알아두어야어야 할것 같은 내용을 정리해두었습니다.</p>
          <a
            href="https://im-designloper.tistory.com/"
            target="_blank"
            className={styles.moveToIdButton}
            style={{ marginTop: "10px", fontWeight: "700" }}
          >
            개발 업무 진행하면서 작성한 블로그 → tistory BLOG
          </a>
        </div>
        <h2 className={styles.heading}>📓 All Posts</h2>
        <div className={styles.sortWrap}>
          <div
            onClick={() => setSortDescending(false)}
            className={!sortDescending ? styles.sortBold : null}
          >
            작성순
          </div>
          <div
            onClick={() => setSortDescending(true)}
            className={sortDescending ? styles.sortBold : null}
          >
            최신순
          </div>
        </div>
        <ol className={styles.posts}>
          {sortList.map((post) => {
            const date = new Date(post.properties.date.date.start)
              .toLocaleString("ko-KR", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })
              .replace(/(\s*)/g, "");
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                      <Text text={post.properties.Create} />
                    </a>
                  </Link>
                </h3>
                <div className={styles.dateWrap}>
                  <p className={styles.postDescription}>{date}</p>
                  <Link href={`/${post.id}`}>
                    <a className={styles.moveToIdButton}> Read post →</a>
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
