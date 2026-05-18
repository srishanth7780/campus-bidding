import { v4 as uuidv4 } from "uuid";

export const IMAGES_3D = [
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Coin/3D/coin_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Gem%20stone/3D/gem_stone_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Star/3D/star_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Rocket/3D/rocket_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Shopping%20bags/3D/shopping_bags_3d.png",
  "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Trophy/3D/trophy_3d.png",
];

export const MOCK_USERS = [
  { id: "u1", username: "RANAVEER PERUMANDLA",password: "6217", avatar: "RP", role: "user" },
  { id: "u2", username: "RANKIREDDY B N S HARI SURYA PAVAN",password: "6218", avatar: "RB", role: "user" },
  { id: "u3", username: "RAVELLA VENKATA SAI DEEPIKA",password: "6219", avatar: "RA", role: "user" },
  { id: "u4", username: "REDROUTHU SRI MEHAR KARTHIK",password: "6220", avatar: "RE", role: "user" },
  { id: "u5", username: "REDROUTU MANISH",password: "6221", avatar: "RE", role: "user" },
  { id: "u6", username: "RENUKUNTLA SHWEJAN",password: "6222", avatar: "RE", role: "user" },
  { id: "u7", username: "PACCHALA SAI BHAVYA",password: "6223", avatar: "SB", role: "user" },
  { id: "u8", username: "SAI VISHAL ANDALAM",password: "6224", avatar: "SA", role: "user" },
  { id: "u9", username: "SAKHAMURI MEGHASHYAM",password: "6225", avatar: "SA", role: "user" },
  { id: "u10", username: "SAMA BSCV NARAYANA REDDY",password: "6226", avatar: "SA", role: "user" },
  { id: "u11", username: "SAMIREDDY NAGA SATYA SAI LAKSHMI",password: "6227", avatar: "SA", role: "user" },
  { id: "u12", username: "SAMMETLA MADHU BABU",password: "6228", avatar: "SA", role: "user" },
  { id: "u13", username: "SAMPATHI SAHITHI",password: "6229", avatar: "SA", role: "user" },
  { id: "u14", username: "SANAPALA SANJANA",password: "6230", avatar: "SA", role: "user" },
  { id: "u15", username: "SANGIREDDY YASHWANTH REDDY",password: "6231", avatar: "SA", role: "user" },
  { id: "u16", username: "SANJANNA GARI RAKSHITH REDDY",password: "6232", avatar: "SA", role: "user" },
  { id: "u17", username: "SANKOJU KIRAN",password: "6233", avatar: "SA", role: "user" },
  { id: "u18", username: "SEELAM VENKAT SAI REDDY",password: "6234", avatar: "SV", role: "user" },
  { id: "u19", username: "SHAIK SAADH",password: "6235", avatar: "SS", role: "user" },
  { id: "u20", username: "SHANKARI KARTHIKEYA",password: "6236", avatar: "SK", role: "user" },
  { id: "u21", username: "SHARADHA KARTHIK",password: "6237", avatar: "SA", role: "user" },
  { id: "u22", username: "SHIRAMSETTI SRI PUSHPAK",password: "6238", avatar: "SS", role: "user" },
  { id: "u23", username: "SHIVA BALAJI",password: "6239", avatar: "SB", role: "user" },
  { id: "u24", username: "SILAM MADHUSUDHAN REDDY",password: "6240", avatar: "SM", role: "user" },
  { id: "u25", username: "SILARAM SAI HARSHA",password: "6241", avatar: "SS", role: "user" },
  { id: "u26", username: "SIMHADRI DARPHAN",password: "6242", avatar: "SD", role: "user" },
  { id: "u27", username: "SOMA SAHASRA",password: "6243", avatar: "SS", role: "user" },
  { id: "u28", username: "SRI KRISHNA BATKEERI",password: "6244", avatar: "SKB", role: "user" },
  { id: "u29", username: "SRISHANTH KONDOJU",password: "6245", avatar: "SK", role: "user" },
  { id: "u30", username: "SURAKANTHI AKHIL",password: "6246", avatar: "SA", role: "user" },
  { id: "u31", username: "SYED RIYAZ HUSSAIN",password: "6247", avatar: "SRH", role: "user" },
  { id: "u32", username: "TALARI HARICHARAN",password: "6248", avatar: "TH", role: "user" },
  { id: "u33", username: "TALARI HARINATH",password: "6249", avatar: "TH", role: "user" },
  { id: "u34", username: "TALARI VIJAY CHARAN",password: "6250", avatar: "TVC", role: "user" },
  { id: "u35", username: "TANKALA SHAHIL KUMAR",password: "6251", avatar: "TSK", role: "user" },
  { id: "u36", username: "TANNIRU NAVA CHARAN",password: "6252", avatar: "TNC", role: "user" },
  { id: "u37", username: "THALAPULA CHITRA",password: "6253", avatar: "TC", role: "user" },
  { id: "u38", username: "THANIRU RAHUL",password: "6254", avatar: "TR", role: "user" },
  { id: "u39", username: "THATIKANTI SRAVAN KUMAR",password: "6255", avatar: "TSK", role: "user" },
  { id: "u40", username: "THONDEPU SHARAN",password: "6256", avatar: "TSS", role: "user" },
  { id: "u41", username: "THONUKUNURI DHEERAJ",password: "6257", avatar: "TS", role: "user" },
  { id: "u42", username: "TIPPALURU VARUN MANIKANTA",password: "6258", avatar: "TD", role: "user" },
  { id: "u43", username: "TIPPARABOINA SAI JAI DEEP",password: "6259", avatar: "TVM", role: "user" },
  { id: "u44", username: "TUMMALA SATHWIKA",password: "6260", avatar: "TSJD", role: "user" },
  { id: "u45", username: "UPPUNUTULA HARSHITH",password: "6261", avatar: "TS", role: "user" },
  { id: "u46", username: "V Chiranjeevi",password: "6262", avatar: "UH", role: "user" },
  { id: "u47", username: "VADLA VAHEED BASHA",password: "6263", avatar: "VC", role: "user" },
  { id: "u48", username: "Vaishnavi Erukala",password: "6264", avatar: "VV", role: "user" },
  { id: "u49", username: "VALLAMSHETLA PAVAN KUMAR",password: "6265", avatar: "VE", role: "user" },
  { id: "u50", username: "VANAPARTHY AGASTHYA SRIRAM",password: "6266", avatar: "VPK", role: "user" },
  { id: "u51", username: "VANAPARTHY HIMANEESH",password: "6267", avatar: "VAS", role: "user" },
];

export const CATEGORIES = ["Art", "Electronics", "Collectibles", "Watches", "Jewelry", "Vehicles"];

export const MOTIVATIONAL_QUOTES = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
  "The secret of getting ahead is getting started. – Mark Twain",
  "Dream big and dare to fail. – Norman Vaughan",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "The mind is everything. What you think you become. – Buddha",
  "You can't build a reputation on what you are going to do. – Henry Ford",
  "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The best revenge is massive success. – Frank Sinatra",
  "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
  "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. – Steve Jobs",
  "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails. – William Arthur Ward",
  "Believe in the power of yet. – Carol Dweck",
  "The difference between ordinary and extraordinary is that little extra. – Jimmy Johnson",
  "Don't limit your challenges. Challenge your limits.",
  "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
  "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
  "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
  "Don't stop when you're tired. Stop when you're done.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
];


export const JWT_SECRET = "bidvault_secret_2024";

export const jwtUtils = {
  encode(payload) {
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const body   = btoa(JSON.stringify({ ...payload, iat: Date.now(), exp: Date.now() + 86400000 }));
    const sig    = btoa(`${header}.${body}.${JWT_SECRET}`).replace(/=/g, "");
    return `${header}.${body}.${sig}`;
  },
  decode(token) {
    try {
      const [, body] = token.split(".");
      return JSON.parse(atob(body));
    } catch { return null; }
  },
  verify(token) {
    try {
      const payload = this.decode(token);
      if (!payload) return false;
      return payload.exp > Date.now();
    } catch { return false; }
  },
};

export const cookieUtils = {
  set(name, value, days = 1) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Strict`;
  },
  get(name) {
    const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  },
  delete(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  },
};

export const TOAST_ICONS = { success: "✓", error: "✕", info: "ℹ" };
export const TOAST_COLORS = {
  success: "rgba(45,212,191,0.15)",
  error:   "rgba(251,113,133,0.15)",
  info:    "rgba(167,139,250,0.15)",
};
export const TOAST_BORDERS = {
  success: "rgba(45,212,191,0.4)",
  error:   "rgba(251,113,133,0.4)",
  info:    "rgba(167,139,250,0.4)",
};

export const CAT_COLORS = {
  Art:          { bg: "rgba(167,139,250,0.15)", color: "#C4B5FD" },
  Electronics:  { bg: "rgba(45,212,191,0.15)",  color: "#2DD4BF" },
  Collectibles: { bg: "rgba(245,197,66,0.15)",  color: "#F5C542" },
  Watches:      { bg: "rgba(251,113,133,0.15)", color: "#FB7185" },
  Jewelry:      { bg: "rgba(236,72,153,0.15)",  color: "#F472B6" },
  Vehicles:     { bg: "rgba(59,130,246,0.15)",  color: "#60A5FA" },
};
