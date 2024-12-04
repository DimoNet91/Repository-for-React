export default function OfficerProfile({
  officer: { name, age, rank, spec, status },
}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>
      <p>Age: {age}</p>
      <p>Spec: {spec}</p>
      <p>Status: {status}</p>
    </div>
  );
}
