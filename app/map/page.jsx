"use client";

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import React, { Fragment, useState } from "react";
import useGroceryList from "../../util/useListingsHook";
import "./Map.css";
// import mapPin from "../../images/map_pin_icon.png";
import { sizeHeight } from "@mui/system";

const containerStyle = {
  width: "55%",
  height: "800px",
};

const center = {
  lat: 53.5790106,
  lng: -113.5799218,
};

const divStyle = {
  background: `white`,
  border: `1 px solid #ccc`,
  padding: 15,
};

export default function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDxSBp4edh5BzrKcIJa6ZrP7G5tQJVNFKo",
  });

  const [selected, setSelected] = useState(null);
  const [map, setMap] = React.useState(null);
  const { groceries } = props;

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.setZoom(11.5);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      id="Marker-test"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* {groceries.map((store) => {
        return <MarkerAndInfo key={store.store_id} store={store} />;
      })} */}
    </GoogleMap>
  );
}

const MarkerAndInfo = ({ store }) => {
  const [open, setOpen] = useState(false);

  const toggleOpenInfo = () => {
    setOpen(!open);
  };
  const storeLogo = store.store_image;
  const storeLocation = {
    lat: Number(store.store_lat),
    lng: Number(store.store_lng),
  };

  return (
    <>
      <Marker
        position={storeLocation}
        onClick={() => toggleOpenInfo()}
        storeName={store.name}
      />
      {open && (
        <InfoWindow position={storeLocation} onCloseClick={toggleOpenInfo}>
          <>
            <div className="info-window">
              <img className="store-logo" src={storeLogo} alt="store logo" />
              <div className="address-container">
                <p className="info-window-address">{store.store_address}</p>
              </div>
              <p className="info-window-text">
                Number of items: {store.items.length}
              </p>
            </div>
          </>
        </InfoWindow>
      )}
    </>
  );
};
