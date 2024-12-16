import clsx from "clsx";
import css from "./OfficerProfile.module.css";

export default function OfficerProfile({
  // eslint-disable-next-line react/prop-types
  officer: { name, age, rank, spec, active },
}) {
  //const statusClsx = clsx(css.text, active ? css.isActive : css.isRetired);
  const containerClsx = clsx(
    css.container,
    active ? css.isActive : css.isRetired
  );

  return (
    <div className={containerClsx}>
      <p className={css.text}>Name: {name}</p>
      <p className={css.text}>Rank: {rank}</p>
      <p className={css.text}>Age: {age}</p>
      <p className={css.text}>Spec: {spec}</p>
      <p className={css.text}>Status: {active ? "Active" : "Retired"}</p>
    </div>
  );
}
