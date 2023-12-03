import React from "react";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";

async function fetchRepo(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`
  );
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }: { name: string }) => {
  const repoData = await fetchRepo(name);

  return (
    <>
      <h2>{repoData.name}</h2>
      <p>{repoData.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repoData.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repoData.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repoData.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
