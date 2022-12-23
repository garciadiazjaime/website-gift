export default function StepA(props) {
  const changeHandler = (event) => {
    if (event.target.value === "kire") {
      props.onNext();
    }
  };

  return (
    <div>
      <p>En él una batalla sucedió, cuando un roedor apareció.</p>
      <p>Hacia el cielo apuntarás y una clave encontrás.</p>
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
