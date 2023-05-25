import {
  YMaps,
  Map,
  SearchControl,
  TypeSelector,
  GeolocationControl,
  ObjectManager,
  ZoomControl,
  TrafficControl,
  FullscreenControl,
} from "@pbe/react-yandex-maps";
import data from "./data.json";
import img from "./traffic-light.png";
import "./app.css";

const defaultState = {
  center: [55.755696, 37.617306],
  zoom: 12,
  controls: [],
};

function App() {
  return (
    <div className="App">
      <YMaps
      className="ymap"
        query={{
          apikey: "yandex API",
          lang: "ru_RU",
        }}
      >
        <Map className="map" defaultState={defaultState}>
          <FullscreenControl
            options={{
              fullscreenenter: true,
            }}
          />
          <SearchControl
            options={{
              float: "right",
            }}
          />
          <TrafficControl
            options={{
              float: "right",
            }}
          />
          <TypeSelector
            options={{
              float: "right",
            }}
          />
          <ZoomControl />
          <ObjectManager
            options={{
              clusterize: true,
              gridSize: 32,
            }}
            objects={{
              openBalloonOnClick: true,
              // preset: "islands#greenDotIcon",
              iconLayout: "default#image",
              // iconImageSize: [30, 42],
              iconImageHref: `${img}`,
            }}
            clusters={{
              preset: "islands#redClusterIcons",
            }}
            filter={(object) => object.id % 2 === 0}
            defaultFeatures={data.features}
            modules={[
              "objectManager.addon.objectsBalloon",
              "objectManager.addon.objectsHint",
            ]}
          />
        </Map>
      </YMaps>
    </div>
  );
}

export default App;
