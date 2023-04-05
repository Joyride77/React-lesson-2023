import { useEffect, useState } from 'react'

interface IGeo {
    type: {
        type: string;
        enum: ["Point"];
        required: true;
    };
    coordinates: {
        type: [number, number];
        required: true;
    };
}

interface IAddress {
    street1: string;
    city: string;
    state: string;
    zipcode: string;
}

interface ILocation {
    address: IAddress;
    geo: IGeo;
}

interface ITheater {
    theaterId: number;
    location: ILocation;
}

export default function Theaters(): JSX.Element {

    const URL = "http://localhost:8080/theaters/list"
    const [theater, setTheater] = useState<ITheater[]>([])

    useEffect(() => {
        fetchList();
        // fetch("http://localhost:8080/theaters/list")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         setTheater(data);
        //     })
    }, []);

    async function fetchList(): Promise<void> {
        const FETCHED_DATA = await fetch(URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setTheater(FETCHED_JSON)
        console.log(FETCHED_JSON);
    }

    return (
        <div>
            {theater.map((m, index) => (
                <div key={index}>
                    <p>{m.theaterId}</p>
                </div>
            ))}
        </div>
    )
}