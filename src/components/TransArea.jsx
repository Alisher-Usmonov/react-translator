import React, { useRef } from 'react';
import getLangCode from '../modules/getLangCode';
import Axios from 'axios';

const TransArea = ({ data, setTo, trans, from, to, setTrans, text }) => {
    const selectRef = useRef("");
    const setToLang = async (e) => {
        let lang = e.target.value;
        localStorage.setItem("to", lang);
        setTo(lang);
        if (text) {
            let req = await Axios.get(`https://ggts.herokuapp.com/api?from=${from}&to=${selectRef.current.value}&text=${text}`);
            let res = await req.data;
            setTrans(res.translate);
        }
    };
    return (
        <div className="w-full md:w-1/2 h-[300px] bg-zinc-100 border-2 rounded-md p-1 flex flex-col gap-2 shadow-md">
            <select className={"w-[180px] px-2 h-[40px] outline-none rounded-md"} ref={selectRef} onChange={setToLang}>
                {Object.values(data).slice(1).map((lang, idx) => (
                    <option key={idx} value={getLangCode(data, lang)}>{lang}</option>
                ))}
            </select>
            <textarea className='w-full h-auto bg-white rounded-md outline-none resize-none text-[18px] font-semibold text-gray-600 p-1' placeholder='Translate here...' readOnly cols="30" rows="10" value={trans}></textarea>
        </div>
    )
};

export default TransArea;