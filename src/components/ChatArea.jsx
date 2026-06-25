import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TypingLoader from "../components/TypingLoader";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { GoogleGenAI } from '@google/genai';
import { nanoid } from 'nanoid';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey });

export default function ChatArea({ onMenuClick }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am Gemini AI. How can I help you today?", sender: "ai" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSendMessage = async () => {
    if(!inputValue.trim() || loading) return;
    let useQuery = inputValue;
    setMessages((prev)=>[...prev,{id:nanoid(),text:useQuery,sender:"user"}])
    setInputValue("")
    setLoading(true);
    try{
     let Respons = await ai.models.generateContent({
      model : "gemini-2.5-flash",
      contents:useQuery,
      config: {
    systemInstruction: "أنت مبرمج مصري فرفوش، صديق للمستخدم، بتساعده في البرمجة بأسلوب ممتع ومشجع، وبتستخدم شوية إيفيهات خفيفة ومصطلحات برمجية سهلة، ودايماً بتشجعه بكلمات زي (يا بطل، يا فنان، عاش)."
  }
      

     })
     setMessages((prev)=>[...prev,{id:nanoid(),text:Respons.text,sender:"ai"}])
    }catch (error) {
      console.error("Gemini Error:", error);
      setMessages((prev) => [...prev, { id: nanoid(), text: "Sorry, something went wrong. Please try again.", sender: "ai" }]);
    } finally {
      // د. قفل اللودر في كل الأحوال
      setLoading(false);
    }
  }
  
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        p: 2,
        overflow:"hidden"
      }}
    >
      {/* الجزء الأول: الهيدر اللي فوق */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{ color: "text.primary", fontSize: "20px", marginRight: {sm:"15px",md:"20px"} }}
        >
          How do circuits work?
        </Typography>
        <Chip
          label=" Gemini Pro"
          sx={{
            background: "#1a163a",
            border: "0.5px solid #534AB7",
            color: "#AFA9EC",
            fontSize: "11px",
            borderRadius: "20px",
            marginRight :""
          }}
        />
        <IconButton
          color="inherit"
          onClick={onMenuClick}
          sx={{ display: { md: "none" }, color: "white", p: 0, marginRight: '10px' }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Divider sx={{ marginTop: "20px" }} />

      {/* الجزء الثاني: صندوق الرسايل (ممكن نديله flexGrow عشان يملى المكان) */}
     
      {/* الجزء الثاني: صندوق الرسايل */}
      <Box
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", mt: 2, overflowY: "auto" }}
      >
        {messages.map((masg) => {
          return (
            <Box
              key={masg.id}
              sx={{
                display: "flex",
                justifyContent: masg.sender === "user" ? "flex-end" : "flex-start",
                marginRight: "30px",
                marginTop: "30px",
              }}
            >
              {/* 1. لو الـ sender هو ai، بنعرض الأفاتار أول حاجة على الشمال */}
              {masg.sender === "ai" && (
                <Avatar sx={{ bgcolor: "divider" }} alt="Gemini" src="/broken-image.jpg">
                  <TipsAndUpdatesIcon />
                </Avatar>
              )}

              {/* 2. نص الرسالة في النص بين الأفاتارين */}
              <Typography
                sx={{
                  color: "text.primary",
                  bgcolor: masg.sender === "user" ? "custom.mutedText" : "divider",
                  padding: "20px",
                  borderRadius: "15px",
                  marginRight: masg.sender === "user" ? "15px" : "0px",
                  marginLeft: masg.sender === "ai" ? "15px" : "0px",
                  whiteSpace: "pre-line" // تكتة مهمة عشان يقرأ السطور الجديدة من جيمناي
                }}
              >
                {masg.text}
              </Typography>

              {/* 3. لو الـ sender هو user، بنعرض الأفاتار في الآخر على اليمين */}
              {masg.sender === "user" && (
                <Avatar sx={{ bgcolor: "custom.mutedText" }} alt="User" src="/broken-image.jpg">
                  AM
                </Avatar>
              )}
            </Box>
          );
        })}

        {/* 👈 هنا مكان اللودر الصح (جوه الصندوق الكبير وبره الـ map) */}
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start", // دايماً على الشمال لأن الـ AI هو اللي بيفكر
              marginRight: "30px",
              marginTop: "30px",
            }}
          >
            <Avatar sx={{ bgcolor: "divider" }} alt="Gemini" src="/broken-image.jpg">
              <TipsAndUpdatesIcon />
            </Avatar>
            <Box
              sx={{
                color: "text.primary",
                bgcolor: "divider",
                padding: "20px",
                borderRadius: "15px",
                marginLeft: "15px",
              }}
            >
              <TypingLoader /> {/* الأنيمايشن بتاعك هنا */}
            </Box>
          </Box>
        )}
     
      </Box>
         <Divider sx={{ marginTop: "50px" }}></Divider>
        <Box
          sx={{
            display: "flex",
            marginTop: "30px",
            border: "0.4px solid #534AB7",
            padding: "10px",
            borderRadius: "15px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <IconButton>
             <AttachFileIcon sx={{ color: "custom.mutedText" }}></AttachFileIcon>
          </IconButton>
          <TextField
            id="outlined-basic"
            label="Ask Me Anyting..."
            variant="outlined"
            value={inputValue}
            onChange={(e)=>{
                setInputValue(e.target.value)
            }}
            onKeyDown={(e)=>{
               if(e.key == "Enter"){
                  handleSendMessage();
               }
            }}
            disabled={loading}
            sx={{
              flexGrow: 1,
              bgcolor: "text.primary",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiInputBase-input": {
              color: "#000000", 
            },
              borderRadius: "15px",
              

            }}
          />
        </Box>
    </Box>
  );
}
