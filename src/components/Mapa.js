import React, { useEffect, useState } from "react";
import axios from "axios";
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import satellite from '../assets/satelite.png'

export default function Mapa() {
    const [position, setPosition] = useState();

    useEffect(() => {
        setInterval(async () => {
            const data = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
            setPosition([data.data.latitude, data.data.longitude])
        }, 1000);

    }, []);

    if (!position)
        return (<div>Cargando...</div>)

    return (
        <>
            <MapContainer zoom={5}
                style={{ height: "90vh" }}
                center={position}
                zoom={4}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={L.icon({
                    iconUrl: satellite, iconSize: [40, 40]
                })}>
                    <Popup>
                        Latitud: {position[0]}
                        <br></br>
                            Longitud: {position[1]}
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}

