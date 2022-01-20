import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [searchInput, setSearchInput] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleOnSearchInputChange = (e) => setSearchInput(e.target.value);
  const handleOnSearchSubmit = async (e) => {
    e.preventDefault();

    if (searchInput === "") {
      setAlert("Please enter text", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(searchInput);
      dispatch({ type: "GET_USERS", payload: users });
      setSearchInput("");
    }
  };

  const handleOnClear = () => {
    dispatch({ type: "RESET_USERS" });
    setSearchInput("");
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleOnSearchSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={searchInput}
                onChange={handleOnSearchInputChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={handleOnClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
