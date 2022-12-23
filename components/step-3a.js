export default function StepA(props) {
  const changeHandler = (event) => {
    // 2 14 16
    if (event.target.value === "24") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>🛋️ ⬇️</p>
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
