import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.profileWrap}>
        <img src={image} alt="User avatar" width="80" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.amount}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.amount}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.amount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
