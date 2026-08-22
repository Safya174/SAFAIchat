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
const CHAT_MODES = {
  general: "تنبيه: نحن الآن في عام 2026! أنت مساعد ذكي عام ومفرفش، تجيب بناءً على أحداث وتكنولوجيا 2026 ولا تعش في الماضي.",
  
  programming: "تنبيه هام جداً: نحن الآن في عام 2026! أنت مبرمج Senior محترف وفرفوش. تعامل مع أحدث إصدارات المكتبات ولغات البرمجة لعام 2026 (زي React 19 و Vite الحديثة).",
  
  telecom: "تنبيه: نحن الآن في عام 2026! أنت مهندس اتصالات خبير تشرح أحدث تقنيات الـ 5G Advanced وبدايات الـ 6G لعام 2026 بأسلوب هندسي دقيق وفرفوش.",
  
  writing: "تنبيه: نحن في عام 2026. أنت كاتب ومبدع ومصحح لغوي محترف تساعد المستخدم بأسلوب عصري ومواكب للوقت الحالي."
};
export default function ChatArea({ onMenuClick, allChats, setAllChats }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am Gemini AI. How can I help you today?", sender: "ai" }
  ]);
  const [chatTitle, setChatTitle] = useState("New Chat");
  
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || loading) return;

    const isStreamingEnabled =
      JSON.parse(localStorage.getItem("streamingReplies")) ?? false;

    const useQuery = inputValue;

    const userMessage = {
      id: nanoid(),
      text: useQuery,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      let aiText = "";
      let aiMessageId = nanoid();

      if (isStreamingEnabled) {
        // إضافة رسالة AI فارغة
        setMessages((prev) => [
          ...prev,
          {
            id: aiMessageId,
            text: "",
            sender: "ai",
          },
        ]);

        const stream = await ai.models.generateContentStream({
          model: "gemini-2.5-flash",
          contents: useQuery,
          config: {
            systemInstruction:
              CHAT_MODES[localStorage.getItem("chatMode") || "general"],
            tools: [{ googleSearch: {} }],
          },
        });

        for await (const chunk of stream) {
          aiText += chunk.text;

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMessageId
                ? {
                    ...msg,
                    text: aiText,
                  }
                : msg
            )
          );
        }
      } else {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: useQuery,
          config: {
            systemInstruction:
              CHAT_MODES[localStorage.getItem("chatMode") || "general"],
            tools: [{ googleSearch: {} }],
          },
        });

        aiText = response.text;

        setMessages((prev) => [
          ...prev,
          {
            id: aiMessageId,
            text: aiText,
            sender: "ai",
          },
        ]);
      }

      // الرسائل النهائية للحفظ
      const updateMessages = [
        ...messages,
        userMessage,
        {
          id: aiMessageId,
          text: aiText,
          sender: "ai",
        },
      ];

      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      let currentTitle = chatTitle;

      if (messages.length === 1) {
        const titleResponse = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: `لخص السؤال التالي في عنوان قصير جداً وموجز ومحترف (لا يزيد عن 4 كلمات وبدون علامات ترقيم): "${useQuery}"`,
        });

        currentTitle = titleResponse.text.trim();
        setChatTitle(currentTitle);
      }

      // 👈 بقينا بنحدث الـ state المشترك بدل ما نتعامل مع localStorage مباشرة هنا
      const currentChatData = {
        id: currentTitle,
        title: currentTitle,
        time: currentTime,
        messages: updateMessages,
      };

      setAllChats((prevChats) => {
        const filteredChats = prevChats.filter(
          (chat) => chat.title !== currentTitle
        );
        return [currentChatData, ...filteredChats];
      });
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: nanoid(),
          text: "Sorry, something went wrong. Please try again.",
          sender: "ai",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
     
    
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
          {chatTitle}
        </Typography>
        <Chip
          label=" Gemini Pro"
          sx={{
            bgcolor: "custom.cardBg",
            border: "0.5px solid",
            borderColor: "primary.main",
            color: "custom.mutedText",
            fontSize: "11px",
            borderRadius: "20px",
          }}
        />
        <IconButton
          color="inherit"
          onClick={onMenuClick}
          sx={{ display: { md: "none" }, color: "text.primary", p: 0, mx: '10px' }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Divider sx={{ marginTop: "20px" }} />

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
                mx: "30px",
                gap:2,
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
                  SA
                </Avatar>
              )}
            </Box>
          );
        })}

        {/* اللودر */}
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
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
              <TypingLoader />
            </Box>
          </Box>
        )}
     
      </Box>
         <Divider sx={{ marginTop: "50px" }}></Divider>
        <Box
          sx={{
            display: "flex",
            marginTop: "30px",
            border: "0.4px solid",
            borderColor: "primary.main",
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
              bgcolor: "background.paper",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiInputBase-input": {
                color: "text.primary", 
              },
              "& .MuiInputLabel-root": {
                color: "custom.mutedText",
              },
              borderRadius: "15px",
            }}
          />
        </Box>
    </Box>
  );
}