import NavigationBar from "@/components/navigation.bar";
import React from "react";
import axios from "axios"

export default function MovieDetail({ data }: { data: any }): JSX.Element {
    console.log(data);
    return (
        <div>
            <NavigationBar />
            {/* <p>{data[0].year}</p> */}
        </div>
    )
}

export async function getServerSideProps(req: any) {
    const { id } = req.params;
    const res = await axios(`http://localhost:8080/movies/byId/${id}`)
    const data = await res.data;

    return {
        props: {
            data,
        }
    }
}