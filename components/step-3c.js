export default function StepA(props) {
  const changeHandler = (event) => {
    // el globo
    if (event.target.value === "garibaldi") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>🍕 🥶</p>
      <input onChange={changeHandler} placeholder="" />
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
