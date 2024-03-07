export default function Button({ children, textOnly, className }) {
  //   const cssClasses = textOnly
  //     ? `text-button ${className}`
  //     : `button ${className}`;
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += "" + className;
  return <button className={cssClasses}>{children}</button>;
}
