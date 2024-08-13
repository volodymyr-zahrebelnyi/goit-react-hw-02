import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
      <p>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
