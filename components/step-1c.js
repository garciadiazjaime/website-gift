export default function StepC(props) {
  const changeHandler = (event) => {
    if (event.target.value === "iko") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>
        mea
      </p>
      <p>
        aru
      </p>
      <p>
        rir
      </p>
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
