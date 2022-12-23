export default function StepD(props) {
  const changeHandler = (event) => {
    if (event.target.value === "eduardo") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>
        J... X Gómez Rojas
      </p>
      <input onChange={changeHandler} placeholder="X = " />
      <style jsx>{`
        div,
        input {
          font-size: 40px;
        }
      `}</style>
    </div>
  );
}
