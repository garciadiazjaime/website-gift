export default function StepA(props) {
  const changeHandler = (event) => {
    if (["mesias", "messiah", "mesías"].includes(event.target.value)) {
      props.onNext();
    }
  };

  return (
    <div>
      <p>handel</p>
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
