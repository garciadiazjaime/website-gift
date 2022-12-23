export default function End(props) {
  const clickHandler = () => {
    alert('Listo')
  }

  return (
    <div>
      <h1 className="center">🏆 🏆 🏆</h1>

      <img src="https://www.mememaker.net/static/images/memes/4072280.jpg" />

      <p>
      Feliz Navidad!
      </p>
      <p>
        Solo queda el correo asignar 🥳🥳🥳
      </p>

      
      <br /><br />
      🎁
      <input />
      <img src="https://www.etsy.com/assets/dist/images/giftcards/designs/49/560x332.20201215163345.png" />

      <br /><br />
      🎁
      <input />
      <img src="https://www.sephora.com/productimages/sku/s00025-main-zoom.jpg?imwidth=315" />

      🎁
      <input />
      <img src="https://www.victoriassecret.com/p/404x539/tif/c7/89/c789b9402c0d497d9f3eac41c73a744a/H22_VSegc_VS.jpg" />

      <button onClick={clickHandler}>Save</button>

      <br /><br />
      <style jsx>{`
        .center {
          text-align: center;
        }
        div {
          font-size: 40px;
        }
        img, input, button {
          width: 100%;
          font-size: 40px;
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
}
