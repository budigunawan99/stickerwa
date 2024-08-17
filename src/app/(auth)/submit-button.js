"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, pendingText, ...props }) => {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button
      {...props}
      type="submit"
      aria-disabled={pending}
      disabled={isPending ? true : false}
    >
      {isPending ? pendingText : children}
    </button>
  );
};

export default SubmitButton;
