import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md side bg-base-100 compact mb-2 mr-2">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="profile avatar" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/user/${login}`}
            className="text-base-content text-opacity-40"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
