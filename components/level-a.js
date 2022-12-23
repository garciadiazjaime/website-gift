export default function LevelB(props) {
  const changeHandler = (event) => {
    // el globo
    if (event.target.value == "coro") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>
        en volCán se metió un enano,
      </p>
      <p>
        dejando a su pasO tres regalos,
      </p>
      <p>
        peRo cuidado con el intervalo,
      </p>
      <p>
        pues te deja sin letrado.
      </p>
      <input onChange={changeHandler} placeholder="" />
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
