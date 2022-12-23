export default function StepB(props) {
  const changeHandler = (event) => {
    if (event.target.value === "---..") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>
      .---- / .---- / ..--- / ...-- / .....
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
