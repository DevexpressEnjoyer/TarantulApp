const AddTarantulaForm = ({
    newName,
    newSpecies,
    newVenomStrength,
    setNewName,
    setNewSpecies,
    setNewVenomStrength,
    AddTarantula,
}) => {
    return (
        <form onSubmit={AddTarantula}>
            Imie:{" "}
            <input
                type="text"
                placeholder="Name"
                value={newName}
                onChange={(t) => setNewName(t.target.value)}
            />
            Gatunek:{" "}
            <input
                type="text"
                placeholder="Species"
                value={newSpecies}
                onChange={(t) => setNewSpecies(t.target.value)}
            />
            SilnyJad?:{" "}
            <input
                type="checkbox"
                checked={newVenomStrength}
                onChange={(t) => setNewVenomStrength(t.target.checked)}
            />
            <button style={{ marginTop: "20px" }}>Dodaj nowego ptasznika</button>
        </form>
    );
};

export default AddTarantulaForm;
