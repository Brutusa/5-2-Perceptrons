import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "bootstrap/dist/css/bootstrap.css";
import Perceptron from "./components/Perceptron";
import DrivingPerceptron from "./components/DrivingPerceptron";
import {useEffect, useState} from "react";
import api from "./api/axiosConfig";
import * as React from 'react';

function App() {
    const [value, setValue] = React.useState(0);

    //START Items to fetch Perceptron results
    const url1 = "http://localhost:8080/perceptron/execute-perceptron";
    const url2 = "http://localhost:8080/perceptron/driving/execute-perceptron";
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const fetchInfo1 = () => {
        return api.get(url1)
            .then((response) => setData(response.data));
    }

    const fetchInfo2 = () => {
        return api.get(url2)
            .then((response) => setData2(response.data));
    }

    useEffect(() => {
        //fetchInfo();
    }, [])


    //END items to fetch Perceptron results

    return (
        <div>
            <h1 className="text-center">Artificial Neural Network</h1>
            <h5 className="text-center">By Andujar Brutus</h5>
            <div className="d-flex align-items-start">

                {/*Bright/Dark Perceptron*/}
                <div className="d-inline-flex p-2">
                    <div className="p-2">
                        <Perceptron/>
                        <div>
                            <div className="d-flex p-2">
                                <button className="btn btn-primary m-4" onClick={fetchInfo1}
                                        style={{
                                            width: "65%",
                                            marginBlock: 0,
                                        }}>
                                    Execute
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-2">
                        < div className="App">
                            <center>
                                <div
                                    style={{
                                        width: "65%",
                                        backgroundColor: "#2c3e50",
                                        padding: 0,
                                        borderRadius: 0,
                                        marginBlock: 0,
                                    }}
                                ><samp>
                                    <p style={{fontSize: 20, color: 'white'}}>{data}</p>
                                </samp>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>

                {/*Driving Perceptron*/}
                <div className="d-inline-flex p-2">
                    <div className="p-2">
                        <DrivingPerceptron/>
                        <div>
                            <div className="d-flex p-2">
                                <button className="btn btn-primary m-4" onClick={fetchInfo2}
                                        style={{
                                            width: "65%",
                                            marginBlock: 0,
                                        }}>
                                    Execute
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-2">
                        < div className="App">
                            <center>
                                <div
                                    style={{
                                        width: "65%",
                                        backgroundColor: "#2c3e50",
                                        padding: 0,
                                        borderRadius: 0,
                                        marginBlock: 0,
                                    }}
                                ><samp>
                                    <p style={{fontSize: 20, color: 'white'}}>{data2}</p>
                                </samp>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default App;
