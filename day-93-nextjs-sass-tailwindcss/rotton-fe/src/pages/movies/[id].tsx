import NavigationBar from "@/components/navigation.bar";
import React from "react";
import axios from "axios"
import styles from "@/styles/Home.module.css"

export default function MovieDetail({ data }: { data: any }): JSX.Element {
    const m = data[0];
    return (
        <div className={styles.mycontainer}>
            <NavigationBar />
            <div className="w-2/3">
                <div className="grid grid-cols-12">
                    <div className="col-span-3">
                        <img src={m.poster} alt="" />
                    </div>
                    <div className="col-span-9">
                        <h1>{m.title}</h1>
                        <p>{m.year}, {m.genres}, {m.runtime}</p>
                        <div className="grid grid-cols-2 mt-2">
                            <div>
                                <span>
                                    <img className="w-5" src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg" alt="tom" />
                                </span>
                                <span className={styles.ratingFont}>{m.imdb.rating}</span>
                            </div>
                            <div>
                                <span>
                                    <img className="w-5" src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg" alt="pop" />
                                </span>
                                <span className={styles.ratingFont}>{m.imdb.votes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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