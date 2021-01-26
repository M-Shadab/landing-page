import React, { useState } from "react";
import Input from "./input";
import { FormWrapper } from "../styledComponents/benefitSection";
import { Button } from "../styledComponents/button";
import { Font30 } from "../styledComponents/font";

const Form = () => {
  const [placeholder1, setPlaceholder1] = useState("");
  const [placeholder2, setPlaceholder2] = useState("");
  const [placeholder3, setPlaceholder3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", placeholder1, placeholder2, placeholder3);
  };

  return (
    <FormWrapper className="col-md-4 px-5 pt-5 pb-6 pb-5 pb-md-0">
      <Font30 className="mb-4 text-uppercase">Form</Font30>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Placeholder1"
          value={placeholder1}
          onChange={(e) => setPlaceholder1(e.target.value)}
        />
        <Input
          placeholder="Placeholder2"
          value={placeholder2}
          onChange={(e) => setPlaceholder2(e.target.value)}
        />
        <Input
          className="mb-3"
          placeholder="Placeholder3"
          value={placeholder3}
          onChange={(e) => setPlaceholder3(e.target.value)}
        />
        <Button
          type="submit"
          className="btn text-uppercase border rounded py-1 px-4"
        >
          Button 4
        </Button>
      </form>
    </FormWrapper>
  );
};

export default Form;
