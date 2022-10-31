import "./style.css";

interface ButtonProps {
  label: string;
  id: string;
  url: string;
  subtext?: string;
}

export default function Button({ label, id, url, subtext }: ButtonProps) {
  return (
    <a href={url} id={id} className="button" title={subtext}>
      {label}
      <div className="btn_share-icon"></div>
    </a>
  );
}
