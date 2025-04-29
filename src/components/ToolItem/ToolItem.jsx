import './ToolItem.css';

export function ToolItem({ icon: Icon, text }) {
  return (
    <div className="tool-item">
      {Icon && <Icon className="tool-item-icon" />}
      <p className="tool-item-text">{text}</p>
    </div>
  );
}