import { createContext, useContext, useState } from "react";
import {a,b} from './test.js'
import Component from './Component.js'
const TopicContext = createContext(null);

export default function MyApp() {
  const [data, setData] = useState([{ one: "第一道题" }, { one: "第二道题" }]);
  const [step, setStep] = useState(0);
  return (
     <Component  
     diffDataList={[
{
  prevData:a, // 旧数据
  newData: b,  // 新数据
  isYaml:false,
  isJson:false,
  newHeader:"newHeader",
  oldHeader:"oldHeader"
},
     ]}
    id={'ui'}
  outputFormat={'side-by-side'}/>
  );
}
