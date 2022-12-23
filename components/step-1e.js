export default function StepE(props) {
  const changeHandler = (event) => {
    if (event.target.value === "1412") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>
        6..6..6300 - X
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
