import React, { useState, useEffect } from "react";
import { HealthAPI, ErrorType } from "../../assets/interfaces";
import axios from "axios";
const Health = () => {
    const [healthStatus, setHealthStatus] = useState<HealthAPI>();
    const [error, setError] = useState<ErrorType>();

    const code = healthStatus?.status;
    const status = healthStatus?.statusText;
    const appStatus = healthStatus?.data.details.TaskTracker.status;
    useEffect(() => {
        const getHealth = async () => {
            try {
                const data = await axios.get('http://localhost:3001/health');
                setHealthStatus(data);
            } catch (error) {
                if (error instanceof Error) {

                    setError(error);
                }

            }
        }
        getHealth();
    }, [])

    return (
        <>
            <h1>Health API</h1>
            {error ?
                <><p>{error?.name}</p><p>{error?.message}</p></>
                :
                <>
                    <p>Status: {status} </p>
                    <p>Code: {code}</p>
                    <p>TaskTracker: {appStatus}</p>
                </>
            }
        </>
    )
}

export default Health;