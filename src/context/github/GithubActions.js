import axios from "axios";

const githubApi = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_URL,
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (searchText) => {
  const params = new URLSearchParams({
    q: searchText,
  });

  const response = await githubApi.get(`/search/users?${params}`);
  return response.data.items;
};

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 25,
  });

  const [user, repos] = await Promise.all([
    githubApi.get(`/users/${login}`),
    githubApi.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, userRepos: repos.data };
};

export const getUser = async (login) => {
  const reponse = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );

  if (reponse.status === 404) {
    window.redirect("/notfound");
  }

  const data = await reponse.json();
  return data;
};

export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 25,
  });
  const reponse = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );
  const data = await reponse.json();
  return data;
};
