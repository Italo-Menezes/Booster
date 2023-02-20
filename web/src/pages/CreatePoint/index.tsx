import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "../Home/assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import api from "../../services/api";
import axios from "axios";
import { ChangeEvent } from "react";
import { FormEvent } from "react";


interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface ClickableMapProps {
  onMapClick: (latlng: L.LatLng) => void;
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [reclicagem, setReclicagem] = useState<number[]>([]);

  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState("0");
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0, 0,
  ]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedItems(city);
  }

  function ClickableMap(props: ClickableMapProps) {
    const [position, setPosition] = useState<L.LatLng | null>(null);

    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
        props.onMapClick(e.latlng);
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You clicked here</Popup>
      </Marker>
    );
  }

  function handleMapClick(latlng: L.LatLng) {
    setSelectedPosition([latlng.lat, latlng.lng]);
  }

  function handInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSelectItem(id: number) {
    const alreadySelected = reclicagem.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = reclicagem.filter((item) => item !== id);
      setReclicagem(filteredItems);
      return;
    } else {
      setReclicagem([...reclicagem, id]);
    }
  }

 async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { name, email, whatsapp } = formData;
    const uf = selectedUf;
    const city = selectedItems;
    const [latitude, longitude] = selectedPosition;
    const items = reclicagem;

    const data = {
      name,
      email,
      whatsapp,
      uf,
      city,
      latitude,
      longitude,
      items,
    };

    await api.post("points", data);

    alert("Ponto de coleta criado!");
  }

  useEffect(() => {
    api.get("items").then((response) => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    // Carregar as cidades sempre que a UF mudar
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);
        setSelectedCity(cityNames);
      });
  }, [selectedUf]);

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecolete" />
        <Link to="/">
          <FiArrowLeft /> Voltar para home
        </Link>
      </header>

      <form onSubmit={onSubmit}>
        <h1>
          Cadasto do <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handInputChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa </span>
          </legend>
          <MapContainer center={[-23.5505, -46.6333]} zoom={15} scrollWheelZoom>
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={selectedPosition}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <ClickableMap onMapClick={handleMapClick} />
          </MapContainer>
          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                onChange={handleSelectUf}
                value={selectedUf}
              >
                <option value="0">Selecione uma UF</option>
                {ufs.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedItems}
                onChange={handleSelectCity}
              >
                <option value="0">Selecione uma cidade</option>
                {selectedCity.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítems de coleta</h2>
            <span>Selecione o um ou mais items abixo</span>
          </legend>

          <ul className="items-grid">
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelectItem(item.id)}
                className={reclicagem.includes(item.id) ? "selected" : ""}
              >
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
