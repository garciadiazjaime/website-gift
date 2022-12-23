export default function StepA(props) {
  const changeHandler = (event) => {
    if (event.target.value === "9") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>Número de emojis de la página anterior * 1.5?</p>
      <input onChange={changeHandler} />
      <style jsx>{`
        div,
        input {
          font-size: 40px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
