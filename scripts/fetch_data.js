import fs from 'fs'
import {profileData, jobsData, projectsData, configData} from "../src/data/onlineDataMap.js"
import { config } from 'dotenv';
import path from 'path';
import {getRequest} from '../src/services/networkService.js'


const nodeEnv = process.env.NODE_ENV || '';
config({ path: path.resolve(process.cwd(), `.env${nodeEnv ? '.' + nodeEnv : ''}`) });

const root = "https://api.jsonbin.io/v3/b";
const data = {};
let promises = []

promises.push(getRequest(`${root}/${profileData}/latest/`).then((res) => {
    data.profile = res;
  }))

  promises.push(getRequest(`${root}/${jobsData}/latest/`).then((res) => {
    data.job = res
}));

promises.push(getRequest(`${root}/${projectsData}/latest/`).then((res) => {
    data.projects = res;
    
}))

promises.push(getRequest(`${root}/${configData}/latest/`).then((res) => {
    data.config = res
}))


Promise.all(promises).then(() => 
{
    fs.writeFile('src/data/data.json', JSON.stringify(data), (err) => {
    })
}).catch(err => console.log(err))