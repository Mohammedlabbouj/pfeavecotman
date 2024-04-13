import axios from "axios";
export function doesExist(_var: string, table: string[]): boolean {
    for (const t of table) {
      if (t === _var){
        return true;
      }
    }
    return false;
  }
export   const sendData = async (Symptom: string[]) : Promise<string> => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/predict", {Symptom});
    return (response.data[0]);
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject("An error occurred while sending data");
  }
};