import axios from 'axios'

const url="http://localhost:1234/api/publish"



export const CallPublish=async(bundle)=>{
    try{
        const acknowledge = await axios.post(`${url}`,bundle)
        return acknowledge.data
    }
    catch(err){
        return alert(`${err}`)
      
    }
}

export const callTable = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1234/getcollaborative"
      );
      // Add this line
      return response.data;
    } catch (err) {
      console.error(err);
      return "An error occurred while fetching data.";
    }
  };
  export const Tablevetri = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1234/getstudent_motivation"
      );
      // Add this line
      return response.data;
    } catch (err) {
      console.error(err);
      return "An error occurred while fetching data.";
    }
  };

  export const Tablevisvak = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1234/getjournal_publication"
      );
      // Add this line
      return response.data;
    } catch (err) {
      console.error(err);
      return "An error occurred while fetching data.";
    }
};

export const Tablemoule = async () => {
  try {
    const response = await axios.get(
      "http://localhost:1234/getparticipation_in_taste"
    );
    // Add this line
    return response.data;
  } catch (err) {
    console.error(err);
    return "An error occurred while fetching data.";
  }
};

export const Tableselva = async () => {
  try {
    const response = await axios.get(
      "http://localhost:1234/getstudent_fieldwork"
    );
    // Add this line
    return response.data;
  } catch (err) {
    console.error(err);
    return "An error occurred while fetching data.";
  }
};
