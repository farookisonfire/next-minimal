const EnabledButton = (props) => {
  const {
    clickHandler = () => {},
    buttonText = 'Enabled',
  } = props;

  return (
    <div>
      <button
        className="button"
        onClick={clickHandler}>
        <span className="button-interior">
          {buttonText}
        </span>
      </button>
      <style jsx>{`
        .button {
          overflow: hidden;
          display: inline-block;
          background: linear-gradient(rgb(40, 160, 229), rgb(1, 94, 148));
          border: 0px;
          padding: 1px;
          text-decoration: none;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px;
          visibility: visible;
          user-select: none;
          width: 175px;
        }
        .button-interior {
          background: linear-gradient(rgb(125, 197, 238), rgb(0, 140, 221) 85%, rgb(48, 162, 228));
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 14px;
          position: relative;
          padding: 0px 12px;
          display: block;
          height: 30px;
          line-height: 30px;
          color: rgb(255, 255, 255);
          font-weight: bold;
          box-shadow: rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
          text-shadow: rgba(0, 0, 0, 0.25) 0px -1px 0px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default EnabledButton;
