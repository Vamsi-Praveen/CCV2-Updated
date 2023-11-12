import React from 'react'

const SelectInput = ({type,name,onChange,value}) => {
    return (
        <div>
            <select value={value} onChange={onChange} name={name} className='h-[45px] px-[15px] py-[10px] w-[250px] md:w-[300px] rounded-[12px] bg-white outline-none border-[2px] border-solid border-[#000] placeholder:font-meidum'>
                {
                    type == "dept" ? (
                        <>
                            <option value={"null"}>Select Branch</option>
                            <option value="cse">CSE</option>
                            <option value="it">IT</option>
                            <option value="aiml">AIML</option>
                            <option value="ece">ECE</option>
                            <option value="eee">EEE</option>
                            <option value="agri">AGRI</option>
                            <option value="civil">CIVIL</option>
                            <option value="mech">MECH</option>
                            <option value="pt">PT</option>
                        </>
                    ) : (
                        type == "college" ? (
                            <>
                            <option value={"null"}>Select College</option>
                                <option value="aec">AEC</option>
                                <option value="acoe">ACOE</option>
                                <option value="acet">ACET</option>
                            </>
                        ) : (
                            <>
                            <option value={"null"}>Select Year</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </>
                        )
                    )
                }
            </select>
        </div>
    )
}

export default SelectInput
