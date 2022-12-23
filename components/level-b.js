export default function LevelB(props) {
  const clickHandler = () => {
    props.onNext();
  };

  return (
    <div>
      <p>
        Bien, han completado uno de los 3️⃣ niveles, y por ello se han 🐄 🤠 un
        🎁.
      </p>
      <p>
        Aún hay 2️⃣ más, cuestión de continuar.
      </p>
      <p>Pero ojo, que fallar es perder lo 🐄 🤠.</p>

      <button onClick={() => clickHandler()}>🟢</button>
      <style jsx>{`
        div,
        input {
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
