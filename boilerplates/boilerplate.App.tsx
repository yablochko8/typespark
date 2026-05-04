import { useState } from "react";
import "./App.css";

export const PORT = 4101; // change this to an import before doing anything serious

const serverPath = `http://localhost:${PORT}`;

const getData = async () => {
  const response = await fetch(`${serverPath}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  console.log("The server response was:", json.message);
  return json.message; // unusued here
};

const postDataAndDisplayResponse = async (
  message: string,
  setValuesFromServer: Function
) => {
  const response = await fetch(`${serverPath}/newmessage`, {
    method: "POST",
    body: JSON.stringify({ message }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  const updatedMessages = json.messages;
  console.log("The server response was:", updatedMessages);
  setValuesFromServer(updatedMessages);
  return json.messages; // unused here
};

function App() {
  const [submittedValue, setSubmittedValue] = useState("");
  const [valuesFromServer, setValuesFromServer] = useState(["starting data"]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>Open the browser console to see this working.</div>
      <button className="bg-slate-500 hover:bg-slate-600 text-white p-2 rounded-md" onClick={() => getData()}>Call the GET Endpoint</button>
      <br />
      <br />

      <div>Enter text here:</div>
      <input
        type="text"
        value={submittedValue}
        onChange={(e) => {
          setSubmittedValue(e.target.value);
        }}
      />
      <br />
      <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        onClick={() =>
          postDataAndDisplayResponse(submittedValue, setValuesFromServer)
        }
      >
        Call the POST Endpoint
      </button>
      {valuesFromServer.map((value, index) => {
        return <div key={index}>{value}</div>;
      })}
    </div>
  );
}

export default App;