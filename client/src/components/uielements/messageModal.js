import { useEffect, useState } from "react";
const MessageModal = (props) => {
  const [massage, setMassage] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMassage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {massage && (
        <div className="row">
          <div className={props.massage.error? "alert alert-danger col-12 mt-3" :"alert alert-success col-12 mt-3"} role="alert">
            <span>{props.massage.text}</span>
            <button
              type="button"
              onClick={props.onClear}
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MessageModal;
