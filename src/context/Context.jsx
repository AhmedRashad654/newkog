import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
const ContextUser = createContext();
function ContextProvider({ children }) {
  const [services, setServices] = useState([]);
  const [contact, setContact] = useState([]);
  const [allPartner, setAllPartner] = useState([]);
  const [allSlider, SetAllSlider] = useState([]);
  const [noquestion, setNoQuestion] = useState();
  const [direction, setDirection] = useState();
  const [ newsLetter, setNewsLetter ] = useState( [] );
  const [recordLettter,setRecordLetter] = useState([])
  useEffect(() => {
    let languath = localStorage.getItem("languath");
    if (languath) {
      setDirection(languath);
      document.body.style.direction = languath === "AR" ? "rtl" : "ltr";
    } else {
      localStorage.setItem("languath", "EN");
      setDirection("EN");
      document.body.style.direction = "ltr";
    }
  }, []);
  function arabic() {
    localStorage.languath = "AR";
    setDirection("AR");
    document.body.style.direction = "rtl";
  }
  ///////////
  function english() {
    localStorage.languath = "EN";
    setDirection("EN");
    document.body.style.direction = "ltr";
  }
  async function getAllContact() {
    try {
      let request = await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/contacts/"
      );
      let response = await request.json();
      setContact(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllPartner() {
    try {
      let request = await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/partners/"
      );
      let response = await request.json();
      setAllPartner(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllPartner();
  }, []);
  async function getAllSlider() {
    try {
      let request = await fetch(
        "https://kog.pythonanywhere.com/api/v1/home/sliders"
      );
      let response = await request.json();
      SetAllSlider(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function valueIdForm(id) {
    localStorage.setItem("noFormFirst", id);
    // setNoForm(id);
  }
  async function addchoice(id) {
    setNoQuestion(id);
  }
  async function choiceJopResponse(id, title) {
    localStorage.setItem("idJopResponse", id);
    localStorage.setItem("nameJopResponse", title);
  }
  async function choiceResponseUser(id) {
    localStorage.setItem("idResponseUser", id);
  }
  /////////////////getServices//////////////////
  async function getAllServices() {
    try {
        let request = await fetch(
      "https://kog.pythonanywhere.com/api/v1/home/services/"
    );
    let response = await request.json();
    setServices(response);
    } catch (error){
      console.log(error)
    }
  
  }
  useEffect(() => {
    getAllServices();
  }, []);
  /////////////////////getAllNewsLetter/////////////
  async function getAllNewsLetter() {
    await axios
      .get("https://kog.pythonanywhere.com/api/v1/home/newsletters/")
      .then( ( result ) => {
        setNewsLetter( result.data );
        setRecordLetter( result.data )
      })
      .catch((error) => console.log(error));
  }
  useEffect( () => {
    getAllNewsLetter()
  },[])
  return (
    <ContextUser.Provider
      value={{
        direction,
        arabic,
        english,
        contact,
        getAllContact,
        allPartner,
        getAllPartner,
        allSlider,
        getAllSlider,
        valueIdForm,
        // noForm,
        addchoice,
        noquestion,
        choiceJopResponse,
        choiceResponseUser,
        services,
        newsLetter,
        recordLettter,
        setRecordLetter,
        getAllNewsLetter
      }}
    >
      {children}
    </ContextUser.Provider>
  );
}

function useUser() {
  const context = useContext(ContextUser);
  if (context === undefined) {
    throw new Error("proplem in context");
  }
  return context;
}
export { useUser, ContextProvider, ContextUser };
