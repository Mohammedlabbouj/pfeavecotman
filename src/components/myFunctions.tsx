import axios from "axios";
export function doesExist(_var: string, table: string[]): boolean {
    for (const t of table) {
      if (t === _var){
        return true;
      }
    }
    return false;
  }
export   const sendData = async (Symptom: string[]) => {
  try {
    const response = await axios.post("/api/data", {Symptom});
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};