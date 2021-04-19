import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar';
import { Consumer } from '../services/Provider';
import { JFile } from '../services/Jpc';
import { FaFileCsv } from 'react-icons/fa';

function CsvConverter({onConvert, onComplete, name}) {
    
    // const [animActive, setAnimActive] = useState(false);
    // const [file, setFile] = useState("");
    // const [fileId, setFileId] = useState("");
    const [percent, setPercent] = useState(0);
    const [display, setDisplay] = useState(false);

    const handleSubmit = async (alert,confirm,e) => {
        e.preventDefault();
        // setAnimActive(true);
        // let data = await JFile.importCsv(fileId);
        // if (data.length === 0) {
        //     alert("No data to process.");
        //     console.warn("No data present. \nIf you think this is code error, kindly contact code provider");
        // }
        // onConvert(data);
        // setAnimActive(false);
    }

    const convert = async (alert,id) => {
        setPercent(30);
        let data = await JFile.importCsv(id);
        setPercent(50);
        if (data.length === 0) {
            console.warn("No data to process. \nIf you think this is code error, kindly contact code provider");
            setPercent(0);
        }
        
        onConvert(data);
        setPercent(100);
    }

    const handleFileChange = (alert,e) => {
        var id = e.target.id;
        setDisplay(true);
        setPercent(15);
        convert(alert,id);
    }

    useEffect(() => {
        setPercent(100);
    }, [onComplete]);

    return (
        <Consumer>
            {({alert, confirm}) => (
                <div className="joysbright">
                    <h1>{name + " Upload"}</h1>
                    <ProgressBar msg="Uploaded" display={display} percent={percent} />
                    <form className='form-block'  encType="multipart/form-data" onSubmit={handleSubmit.bind(null,alert,confirm)} > 
                        <div className="input-file-container">
                            <div className="inputfile-container">
                                <label>Choose File:</label>
                                <div>
                                    <input type="file" name="file" id="file" onChange={handleFileChange.bind(null, alert)} className="inputfile" />
                                    <label htmlFor="file" ><FaFileCsv /> Import </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <ButtonLoader active={animActive} ><FaFileImport /> Import</ButtonLoader> */}
                        </div>
                    </form>
                </div>
            )
            }
        </Consumer>
    )
}

export default CsvConverter
