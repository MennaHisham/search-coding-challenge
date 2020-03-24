import React from "react";

const DataRow = props => {
  let oneData = props.data;
  return (
    <article className="card border-primary mb-3 hover post">
      <div className="card-header blockquote">
        {oneData.name}
        {"  "}
        {oneData.gender === "male" ? (
          <img height="32px" src="/icon-male.png" alt="male-icon" />
        ) : (
          <img height="32px" src="/icon-female.png" alt="female-icon" />
        )}
      </div>
      <div className="card-body">
        <p>
          <img
            height="32px"
            src="/icon-age.png"
            alt="age-icon"
            className="mr-3"
          />
          {oneData.age}
        </p>
        <p style={{ color: `${oneData.eyeColor}` }}>
          <img
            height="32px"
            src="/icon-eye.png"
            alt="eye-icon"
            className="mr-3"
          />

          {oneData.eyeColor.slice(0, 1).toUpperCase() +
            oneData.eyeColor.slice(1)}
        </p>
        <p>
          <img
            height="32px"
            src="/icon-company.png"
            alt="company-icon"
            className="mr-3"
          />
          {oneData.company}
        </p>
        <p>
          <img
            height="32px"
            src="/icon-email.png"
            alt="email-icon"
            className="mr-3"
          />
          {oneData.email}
        </p>
        <p>
          <img
            height="32px"
            src="/icon-phone.png"
            alt="phone-icon"
            className="mr-3"
          />
          {oneData.phone}
        </p>
        <p>
          <img
            height="32px"
            src="/icon-address.png"
            alt="adress-icon"
            className="mr-3"
          />
          {oneData.address}
        </p>
      </div>
    </article>
  );
};
export default DataRow;
