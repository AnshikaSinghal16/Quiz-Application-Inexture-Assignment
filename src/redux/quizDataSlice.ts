import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface  quizDataResponse  {
  statusCode: number;
  statusMessage: string;
  data: {
    fName: string;
    lName: string;
    email: string;
  };
}

interface quizDataResponseData {
  responseData: {
    Question:string,
    Options :string[],
    RightAnswer:number
  }[]| null;
  loading: boolean;
  error: string;
}

const initialQuizData= [
  {
    "Question":"The Central Rice Research Station is situated in?",
    "Options" :[
      "Chennai",
      "Cuttack",
      "Bangalore",
      "Quilon"
    ],
    "RightAnswer":2
  },
  {
    "Question":"Who among the following wrote Sanskrit grammar?",
    "Options" :[
      "Kalidasa",
      "Charak",
      "Panini",
      "Aryabhatt"
    ],
    "RightAnswer":3
  },
  {
    "Question":"Which among the following headstreams meets the Ganges in last?",
    "Options" :[
      "Alaknanda",
      "Pindar",
      "Mandakini",
      "Bhagirathi"
    ],
    "RightAnswer":4
  },
  {
    "Question":"The metal whose salts are sensitive to light is?",
    "Options" :[
      "Zinc",
      "Silver",
      "Copper",
      "Aluminum"
    ],
    "RightAnswer":2
  },
  {
    "Question":"What is the capital of Maharashtra ______________________?",
    "Options" :[
      "Mumbai",
      "New Delhi",
      "Chennai",
      "None of the above"
    ],
    "RightAnswer":1
  },
  {
    "Question":"____________________________ is the capital of Uttarakhand.",
    "Options" :[
      "Lucknow",
      "Prayagraj (Allahabad)",
      "Dehradun",
      "Shimla"
    ],
    "RightAnswer":3
  },
  {
    "Question":"________________________ is the capital of Uttarakhand.",
    "Options" :[
      "Lucknow",
      "Prayagraj (Allahabad)",
      "Dehradun",
      "Shimla"
    ],
    "RightAnswer":3
  },
  {
    "Question":"Dispur is the capital city of which north-eastern state?",
    "Options" :[
      "Assam",
      "Tripura",
      "Meghalaya",
      "Mizoram"
    ],
    "RightAnswer":1
  },
  {
    "Question":"Kolkata is the capital of which eastern state ____________?",
    "Options" :[
      "West Bengal",
      "Odisha (Orissa)",
      "Jharkhand",
      "Tripura"
    ],
    "RightAnswer":1
  },
  {
    "Question":"_________________________ is the capital of Punjab.",
    "Options" :[
      "Delhi",
      "Jaipur",
      "Chandigarh",
      "Chennai"
    ],
    "RightAnswer":3
  },
  {
    "Question":"What is the capital of Himachal Pradesh ________?",
    "Options" :[
      "Shimla",
      "Chandigarh",
      "Manali",
      "Bhopal"
    ],
    "RightAnswer":1
  },
  {
    "Question":"The capital of Goa is ___________________________.",
    "Options" :[
      "Imphal",
      "Itanagar",
      "Hyderabad",
      "Panaji"
    ],
    "RightAnswer":4
  },
  {
    "Question":"Which city is known as the “summer capital” of Jammu and Kashmir?",
    "Options" :[
      "Jammu",
      "Srinagar",
      "Shimla",
      "Anantnag"
    ],
    "RightAnswer":2
  },
  {
    "Question":"Port Blair is the capital of which Union Territory?",
    "Options" :[
      "Andaman and Nicobar Islands",
      "Daman and Diu",
      "Puducherry",
      "None of the above"
    ],
    "RightAnswer":1
  },
  {
    "Question":"_________________ is the capital of Chattisgarh.",
    "Options" :[
      "Bengaluru (Bangalore)",
      "Ranchi",
      "Raipur",
      "Patna"
    ],
    "RightAnswer":3
  },
  {
    "Question":"Gangtok is the capital of which state ________________?",
    "Options" :[
      "Sikkim",
      "Arunachal Pradesh",
      "Nagaland",
      "Mizoram"
    ],
    "RightAnswer":1
  },
  {
    "Question":"Gandhinagar is the capital of which state ______________?",
    "Options" :[
      "Gujarat",
      "Maharashtra",
      "Telangana",
      "Goa"
    ],
    "RightAnswer":1
  },
  {
    "Question":"What is the capital of Uttar Pradesh ________________?",
    "Options" :[
      "Prayagraj (Allahabad)",
      "Kanpur",
      "Gorakhpur",
      "Lucknow"
    ],
    "RightAnswer":4
  },
  {
    "Question":"________________ is the capital of Odisha (Orissa).",
    "Options" :[
      "Kolkata",
      "Shillong",
      "Bhubaneshwar",
      "Cuttack"
    ],
    "RightAnswer":3
  },
  {
    "Question":"Silvassa is the capital of which Union Territory?",
    "Options" :[
      "Mumbai",
      "Puducherry",
      "Daman and Diu",
      "Dadar and Nagar Haveli"
    ],
    "RightAnswer":4
  },
]

const initialState: quizDataResponseData = {
  responseData: initialQuizData,
  loading: false,
  error: "",
};




export const quizDataSlice = createSlice({
  name: "quizData",
  initialState,
  reducers: {
    resetQuizDataState: () => initialState,
  },
  extraReducers: (builder) => {
  },
});

export const { resetQuizDataState} = quizDataSlice.actions;

export const quizDataResponses = (state: RootState): any | null =>
  state.quizDataReducer.responseData;

export const quizDataResponseError = (state: RootState): string =>
  state.quizDataReducer.error;

export const quizDataLoading = (state: RootState): boolean =>
  state.quizDataReducer.loading;

export default quizDataSlice.reducer;
