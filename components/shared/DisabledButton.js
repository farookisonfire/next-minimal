const DisabledButton = (props) => {
  const {
    clickHandler = () => {},
    buttonText = 'Disabled',
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
          background: #3C3B3F;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to bottom, #605C3C, #3C3B3F);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to bottom, #605C3C, #3C3B3F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          border: 0px;
          padding: 1px;
          text-decoration: none;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px;
          visibility: visible;
          user-select: none;
          width: 175px;
          cursor: not-allowed;
        }
        .button-interior {
          background: #3C3B3F;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to bottom, #605C3C, #3C3B3F);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to bottom, #605C3C, #3C3B3F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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

export default DisabledButton;
