import React from "react";

const Slot = ({ children, ...props }) => {
  // If children is valid clone children and merge props
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      style: {
        ...props.style,
        ...children.props.style,
      },
    });
  }

  // Throw error if there is more then one child
  if (React.Children.count(children) > 1) {
    React.Children.only(null);
  }

  return null;
};

export default Slot;
