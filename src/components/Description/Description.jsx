import css from "./Description.module.css";

export default function Description() {
  return (
    <div className={css.description}>
      <h2>Sip Happens Café</h2>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
