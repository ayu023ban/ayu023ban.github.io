import React, { useEffect, useState } from "react";
import {
  configData,
  jobsData,
  profileData,
  projectsData,
} from "../data/onlineDataMap";
import { getRequest } from "../services/networkService";

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
    const root = "https://api.jsonbin.io/v3/b";
    getRequest(`${root}/${profileData}/latest/`).then((res) => {
      setProfile(res);
    });
    getRequest(`${root}/${jobsData}/latest/`).then((res) => {
      setJobs(res);
    });
    getRequest(`${root}/${projectsData}/latest/`).then((res) => {
      setProjects(res);
    });
    getRequest(`${root}/${configData}/latest/`).then((res) => {
      setConfig(res);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{ profile, jobs, projects, config }}
      children={children}
    ></DataContext.Provider>
  );
};
