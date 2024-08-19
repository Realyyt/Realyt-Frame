import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p>
            Head to{" "}
            <a
              href="/api/dev"
              style={{ display: "inline", fontWeight: "semibold" }}
            >
              <code className={styles.code}>localhost:3000/api</code>
            </a>{" "}
            for your frame endpoint.
          </p>
        </div>
        <div></div>
      </div>

      <div className={styles.center}>
        <div>
          <h1>Meme Generator</h1>
          <h2 className={styles.title}>
            A Frame Experiment by{" "}
            <a
              className="text-indigo-400 hover:text-indigo-300"
              href="https://warpcast.com/realyt"
            >
              Realyt
            </a>
          </h2>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://github.com/Realyyt/Realyt-Frame"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github <span>-&gt;</span>
          </h2>
          <p>View the source code</p>
        </a>

        <a
          href="https://frog.fm/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Frog.fm <span>-&gt;</span>
          </h2>
          <p>Built with Frog.fm</p>
        </a>

        <a
          href="https://github.com/Realyyt"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Realyt <span>-&gt;</span>
          </h2>
          <p> Farcaster Frames</p>
        </a>
      </div>
    </main>
  );
}
