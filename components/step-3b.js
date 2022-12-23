export default function StepA(props) {
  const changeHandler = (event) => {
    if (event.target.value === "erika") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>🐚 🟢</p>
      <input onChange={changeHandler} placeholder="" />
      <style jsx>{`
        div,
        input {
          font-size: 40px;
        }
      `}</style>
    </div>
  );
}
