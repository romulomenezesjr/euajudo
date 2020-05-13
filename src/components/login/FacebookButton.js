import React from "react";
import FacebookLogin from "react-facebook-login";
import store from "../../flux/stores/messageStore";
export default function FacebookButton(props) {
  const componentClicked = () => {
    console.log("clicked");
  };

  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      props.setMessage({
        ...props.message,
        userName: response.name,
        userPicture: response.picture.data.url,
        facebookData: { ...response },
        facebookIn: true,
      });
      store.setUser({ ...response });
    }
  };

  return (
    <div className=" text-center">
      <FacebookLogin
        appId="612210722701715"
        autoLoad={true}
        fields="name,email,picture.type(large)"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}
