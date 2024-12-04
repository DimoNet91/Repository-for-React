import AppBar from "../AppBar/AppBar";
import OfficerProfile from "../OfficerProfile/OfficerProfile";

const fistPilot = {
  id: 1,
  name: "Boby Bill",
  rank: "Ser",
  age: "43",
  spec: "Pilot",
  status: "Active",
};

const seconpilot = {
  id: 2,
  name: "Fil Mill",
  rank: "Major",
  age: "29",
  spec: "Shooter",
  status: "Active",
};

export default function App() {
  return (
    <div>
      <AppBar />
      <OfficerProfile officer={fistPilot} />
      <OfficerProfile officer={seconpilot} />
    </div>
  );
}
