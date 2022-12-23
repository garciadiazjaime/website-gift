export default function StepA(props) {
  const changeHandler = (event) => {
    if (event.target.value === "8") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>Número de emojis de la página anterior?</p>
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
