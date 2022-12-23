export default function StepA(props) {
  const changeHandler = (event) => {
    if (event.target.value === "38") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>Número de letras de la conchita que empieza con A</p>
      <input onChange={changeHandler} />
      <style jsx>{`
        div,
        input {
          font-size: 40px;
        }
      `}</style>
    </div>
  );
}
