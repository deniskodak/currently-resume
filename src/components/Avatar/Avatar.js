import React, { useEffect, useState } from "react";
import userAvatar from "./avatar.jpg";
import "./styles.scss";

export default function Avatar() {
  const [avatar, setAvatar] = useState();
  useEffect(() => setAvatar(userAvatar), [avatar]);

  return <div className="avatar__box"></div>;
}
