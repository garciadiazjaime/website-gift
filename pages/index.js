import Countdown from "react-countdown";

import Game from '../components/game'

export default function Home() {
  return (
    <div>
      <main>
        <div className="center">
          <Countdown date={Date.now() + 26 * 60 * 1000} />
        </div>

        <Game />
      </main>

      <style jsx>{`
        .center {
          text-align: center;
        }
        main {
          font-size: 40px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
