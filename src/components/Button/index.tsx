import "./style.css";

interface ButtonProps {
  label: string;
  id: string;
  url: string;
}

export default function Button({ label, id, url }: ButtonProps) {
  return (
    <a href={url} id={id} className="button">
      {label}
    </a>
  );
}
