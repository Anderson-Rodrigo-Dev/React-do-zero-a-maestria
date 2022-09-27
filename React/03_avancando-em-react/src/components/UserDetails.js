const UserDetails = ({ name, age, job }) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18 ? (
          <p>Apto para tirar habilitação</p>
        ) : (
          <p>Menor de idade</p>
        )}
    </div>
  );
};

export default UserDetails;
