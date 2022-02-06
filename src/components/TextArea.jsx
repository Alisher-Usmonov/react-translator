import React, { useRef } from 'react';
import Axios from "axios";
import getLangCode from '../modules/getLangCode';

const TextArea = ({ setTrans, data, to, setFrom, setText }) => {
    const selectRef = useRef("");
    const setFromLang = (e) => {
        let lang = e.target.value;
        setFrom(lang);
    }
    const textChange = async (e) => {
        let text = e.target.value;
        if (text.replace(/[ ]/g, "")) {
            setText(text);
            let req = await Axios.get(`https://ggts.herokuapp.com/api?from=${selectRef.current.value}&to=${to}&text=${text}`);
            let res = await req.data;
            setTrans(res.translate);
        }
    }
    return (
        <div className="w-full md:w-1/2 h-[300px] bg-zinc-100 border-2 rounded-md p-1 flex flex-col gap-2 shadow-md">
            <select className={"w-[180px] px-2 h-[40px] outline-none rounded-md"} ref={selectRef} onChange={setFromLang}>
                {Object.values(data).map((lang, idx) => (
                    <option key={idx} value={getLangCode(data, lang)}>{lang}</option>
                ))}
            </select>
            <textarea name="translate" cols="30" onChange={textChange} spellCheck={false} rows="10" placeholder='Type here...' className={"rounded-md resize-none text-[18px] font-semibold text-gray-600 p-1 h-auto outline-none "}></textarea>
        </div>
    )
};

export default TextArea;