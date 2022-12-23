export default function LevelB(props) {
  const clickHandler = () => {
    props.onNext();
  };

  return (
    <div>
      <p>
        Bien, han completado el segundo nivel, y por ello se han 🐄 🤠 otro
        🎁.
      </p>
      <p>
        Aún queda 1️⃣ más, cuestión de continuar.
      </p>
      <p>Recordar, que fallar es perder lo avanzado.</p>
      <button onClick={() => clickHandler()}>🟢</button>
      <style jsx>{`
        div {
          font-size: 40px;
        }
        button {
          width: 100%;
          padding: 24px 0;
          font-size: 25px;
        }
      `}</style>
    </div>
  );
}
