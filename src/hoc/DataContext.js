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
    getRequest(`https://api.jsonbin.io/b/${profileData}`).then((res) => {
      setProfile(res);
    });
    getRequest(`https://api.jsonbin.io/b/${jobsData}`).then((res) => {
      setJobs(res);
    });
    getRequest(`https://api.jsonbin.io/b/${projectsData}`).then((res) => {
      setProjects(res);
    });
    getRequest(`https://api.jsonbin.io/b/${configData}`).then((res) => {
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
