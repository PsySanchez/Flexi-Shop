import "./Alert.css";

export default function Alert({ text, className }) {
  return (
    <div className={`alert ${className}`} role="alert">
      {text}
    </div>
  );
}
