import React, { useEffect, useState } from "react";
import data from '../data/data.json';

export const DataContext = React.createContext();

export default ({ children }) => {
  const [profile, setProfile] = useState({
    technologies: [],
    social_links: {},
  });
  const [jobs, setJobs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [config, setConfig] = useState({ max_project_to_show: 3 });

  useEffect(() => {
    setProfile(data.profile);
    setConfig(data.config);
    setJobs(data.job);
    setProjects(data.projects);
  }, []);

  return (
    <DataContext.Provider
      value={{ profile, jobs, projects, config }}
      children={children}
    ></DataContext.Provider>
  );
};
