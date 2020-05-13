import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import messageStore from "../../flux/stores/messageStore";
import { getMessage } from "../../flux/actions/MessageActions";

const MessageDetail = (props) => {
  const [message, setMessage] = useState(messageStore.getSelectedMessage());

  useEffect(() => {
    messageStore.addChangeListener(onChange);
    if (messageStore.getSelectedMessage().id === 0) {
      let id = props.match.params.id;
      getMessage(id);
    }
    return () => messageStore.removeChangeListener(onChange); // Clean up
  }, [message, props.param]);

  const onChange = () => {
    setMessage(messageStore.getSelectedMessage());
  };

  return (
    <div className="MessageDetail">
      <div className="col-12 mx-auto">
        <div className="border-card">
          <div className="card-header">{message.userName}</div>
          <div className="card-body">
            <p className="card-text">{message.description}</p>
            <p>{message.id}</p>
            <div className="text-center">
              <a
                href={`https://api.whatsapp.com/send?phone=${message.contactNumber}&text=Eu%20ajudo`}
                className="btn btn-success btn-message mx-3"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                <br></br>
                Meu Contato
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${message.userLatitude},${message.userLongitude}`}
                className="btn btn-primary btn-message mx-3"
              >
                <FontAwesomeIcon icon={faMap} size="2x" />
                <br></br>
                Localização
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;
