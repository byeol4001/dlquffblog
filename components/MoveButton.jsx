import PropTypes from "prop-types";

export const MoveButton = ({ label, ...props }) => {
  return (
    <>
      <button className="movebutton" type="button" {...props}>
        {label}
      </button>
      <style jsx>{`
        .movebutton {
          padding: 10px 15px;
          margin-top: 20px;
          border: none;
          border-radius: 5px;
          background: #fff;
          color: #282828;
          font-weight: 700;
          box-shadow: 2px 2px 7px #282828;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

MoveButton.propTypes = {
  /** 버튼에 들어갈 이름 */
  label: PropTypes.string.required,
};

MoveButton.defaultProps = {
  label: PropTypes.string,
};
