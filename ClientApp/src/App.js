import React, { useEffect, useState } from "react";
import "./style.css";
import TarantulaTable from "./components/TarantulaTable.js";

function App() {
    const [tarantulas, setTarantulas] = useState([]);
    const [newName, setNewName] = useState("");
    const [newSpecies, setNewSpecies] = useState("");
    const [newVenomStrength, setNewVenomStrength] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editSpecies, setEditSpecies] = useState("");
    const [editVenomStrength, setEditVenomStrength] = useState(false);

    function LoadTarantulas() {
        fetch("/api/tarantulas")
            .then((res) => res.json())
            .then((data) => setTarantulas(data));
    }

    useEffect(() => {
        LoadTarantulas();
    }, []);

    function AddTarantula(t) {
        t.preventDefault();
        fetch("/api/tarantulas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: newName,
                species: newSpecies,
                hasStrongVenom: newVenomStrength,
            }),
        })
            .then((res) => res.json())
            .then(() => {
                setNewName("");
                setNewSpecies("");
                setNewVenomStrength(false);
                LoadTarantulas();
            });
    }

    function StartEdit(t) {
        setEditId(t.id);
        setEditName(t.name);
        setEditSpecies(t.species);
        setEditVenomStrength(t.hasStrongVenom);
    }

    function SaveEdit() {
        fetch(`/api/tarantulas/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: editId,
                name: editName,
                species: editSpecies,
                hasStrongVenom: editVenomStrength,
            }),
        }).then(() => {
            setEditId(null);
            LoadTarantulas();
        });
    }

    function DeleteTarantula(id) {
        fetch(`/api/tarantulas/${id}`, {
            method: "DELETE",
        }).then(() => {
            LoadTarantulas();
        });
    }

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Lista Ptaszników</h1>
            <TarantulaTable
                tarantulas={tarantulas}
                newName={newName}
                newSpecies={newSpecies}
                newVenomStrength={newVenomStrength}
                setNewName={setNewName}
                setNewSpecies={setNewSpecies}
                setNewVenomStrength={setNewVenomStrength}
                AddTarantula={AddTarantula}
                editId={editId}
                editName={editName}
                editSpecies={editSpecies}
                editVenomStrength={editVenomStrength}
                setEditName={setEditName}
                setEditSpecies={setEditSpecies}
                setEditVenomStrength={setEditVenomStrength}
                setEditId={setEditId}
                SaveEdit={SaveEdit}
                StartEdit={StartEdit}
                DeleteTarantula={DeleteTarantula}
            />
        </div>
    );
}

export default App;
