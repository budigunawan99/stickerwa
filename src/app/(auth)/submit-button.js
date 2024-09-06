"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, pendingText, preventSubmit, ...props }) => {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button
      {...props}
      type="submit"
      aria-disabled={pending}
      disabled={preventSubmit ? true : isPending ? true : false}
    >
      {isPending ? pendingText : children}
    </button>
  );
};

export default SubmitButton;
