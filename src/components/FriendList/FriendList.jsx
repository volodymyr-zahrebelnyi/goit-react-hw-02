import clsx from "clsx";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.listItem}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
