const TarantulaTable = ({
    tarantulas,
    editId,
    editName,
    editSpecies,
    editVenomStrength,
    setEditName,
    setEditSpecies,
    setEditVenomStrength,
    setEditId,
    SaveEdit,
    StartEdit,
    DeleteTarantula
}) => {
    return (
        <table id="TarantulaList">
            <thead>
                <tr>
                    <th>Lp.</th>
                    <th>Imię</th>
                    <th>Gatunek</th>
                    <th>Silnie jadowity</th>
                    <th>Opcje</th>
                </tr>
            </thead>
            <tbody>
                {tarantulas.map((t, index) => (
                    <tr key={t.id}>
                        {editId == t.id ? (
                            <>
                                <td>{index + 1}</td>
                                <td>
                                    <input
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={editSpecies}
                                        onChange={(e) => setEditSpecies(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={editVenomStrength}
                                        onChange={(e) => setEditVenomStrength(e.target.checked)}
                                    />
                                </td>
                                <td>
                                    <button onClick={SaveEdit} style={{ marginLeft: "10px" }}>
                                        Zapisz
                                    </button>
                                    <button
                                        onClick={() => setEditId(null)}
                                        style={{ marginLeft: "5px" }}
                                    >
                                        Anuluj
                                    </button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td>{index + 1}</td>
                                <td>{t.name}</td>
                                <td>{t.species}</td>
                                <td>{t.hasStrongVenom ? "Tak" : "Nie"}</td>
                                <td>
                                    <button
                                        onClick={() => StartEdit(t)}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Edytuj
                                    </button>
                                    <button
                                        class="delete-button"
                                        onClick={() => DeleteTarantula(t.id)}
                                        style={{ marginLeft: "5px" }}
                                    >
                                        Usuń
                                    </button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TarantulaTable;