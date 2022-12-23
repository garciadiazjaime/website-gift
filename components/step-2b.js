export default function StepA(props) {
  const changeHandler = (event) => {
    if (event.target.value === "30th") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>T R A T L F M X 🎠</p>
      <input onChange={changeHandler} placeholder="X = " />
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
