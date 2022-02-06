import React, { useState, useEffect } from 'react';
import TextArea from './components/TextArea';
import Axios from "axios";
import TransArea from './components/TransArea';

function App() {
  const [langs, setLangs] = useState({});
  const [trans, setTrans] = useState("");
  const [to, setTo] = useState("af");
  const [from, setFrom] = useState("auto");
  const [text, setText] = useState("");

  const fetchData = async () => {
    try {
      let req = await Axios.get("https://ggts.herokuapp.com/api/langs");
      let res = await req.data;
      setLangs(res.languages);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-1 md:p-3 flex flex-col md:flex-row gap-2 font-roboto">
      <TextArea data={langs} setTrans={setTrans} to={to} setFrom={setFrom} setText={setText} text={text} />
      <TransArea data={langs} trans={trans} setTo={setTo} from={from} text={text} setTrans={setTrans} />
    </div>
  )
}

export default App;