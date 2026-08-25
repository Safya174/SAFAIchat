import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TypingLoader from "../components/TypingLoader";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import InputAdornment from "@mui/material/InputAdornment";
import { stackClasses } from "@mui/material/Stack";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const CHAT_MODES = {
  general:
    "تنبيه: نحن الآن في عام 2026! أنت مساعد ذكي عام ومفرفش، تجيب بناءً على أحداث وتكنولوجيا 2026 ولا تعش في الماضي.",
  programming:
    "تنبيه هام جداً: نحن الآن في عام 2026! أنت مبرمج Senior محترف وفرفوش. تعامل مع أحدث إصدارات المكتبات ولغات البرمجة لعام 2026 (زي React 19 و Vite الحديثة).",
  telecom:
    "تنبيه: نحن الآن في عام 2026! أنت مهندس اتصالات خبير تشرح أحدث تقنيات الـ 5G Advanced وبدايات الـ 6G لعام 2026 بأسلوب هندسي دقيق وفرفوش.",
  writing:
    "تنبيه: نحن في عام 2026. أنت كاتب ومبدع ومصحح لغوي محترف تساعد المستخدم بأسلوب عصري ومواكب للوقت الحالي.",
};

export default function ChatArea({
  onMenuClick,
  allChats,
  setAllChats,
  activeChat,
}) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am Gemini AI. How can I help you today?",
      sender: "ai",
    },
  ]);
  const [chatTitle, setChatTitle] = useState("New Chat");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    if (activeChat) {
      setMessages(activeChat.messages);
      setChatTitle(activeChat.title);
    } else {
      setMessages([
        {
          id: 1,
          text: "Hello! I am Gemini AI. How can I help you today?",
          sender: "ai",
        },
      ]);
      setChatTitle("New Chat");
    }
  }, [activeChat]);

  let fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // 🛠️ تم تصليح الأخطاء داخل دالة تغيير الملف هنا
  let handleFileChnge = (e) => {
    let file = e.target.files[0];
    if (!file) return;

    let Reader = new FileReader();

    if (
      file.type.startsWith("text/") ||
      file.name.endsWith(".js") ||
      file.name.endsWith(".jsx") ||
      file.name.endsWith(".json") ||
      file.name.endsWith(".css")
    ) {
      Reader.onload = (event) => {
        setSelectedFile({
          name: file.name,
          type: "text",
          content: event.target.result, // تم تصليح event بدل e
        });
      };
      Reader.readAsText(file);
    } else {
      Reader.onload = (event) => {
        setSelectedFile({
          name: file.name,
          type: "image",
          mimeType: file.type, // تم تصليح mimeType بدل minType
          data: event.target.result.split(",")[1], // تم تصليح event بدل e
        });
      };
      Reader.readAsDataURL(file);
    }

    e.target.value = ""; // تصفير الـ Input لتسهيل إعادة رفع نفس الملف
  };

  const handleSendMessage = async () => {
    if ((!inputValue.trim() && !selectedFile) || loading) return;

    const useQuery = inputValue;
    let parts = [];

    if (selectedFile && selectedFile.type === "text") {
      parts.push({
        text: `[مرفق ملف: ${selectedFile.name}]\nمحتوى الملف:\n${selectedFile.content}\n\nسؤال المستخدم: ${useQuery}`,
      });
    } else if (selectedFile && selectedFile.type === "image") {
      parts.push({
        inlineData: {
          mimeType: selectedFile.mimeType,
          data: selectedFile.data,
        },
      });
      parts.push({ text: useQuery || "اشرح محتوى هذه الصورة" });
    } else {
      parts.push({ text: useQuery });
    }

    const displayUserText = selectedFile
      ? `📄 [${selectedFile.name}]\n${useQuery}`
      : useQuery;

    const userMessage = {
      id: nanoid(),
      text: displayUserText,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setSelectedFile(null);
    setLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: parts }],
            systemInstruction: {
              parts: [
                {
                  text: CHAT_MODES[
                    localStorage.getItem("chatMode") || "general"
                  ],
                },
              ],
            },
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to fetch response");
      }

      const aiText = data.candidates[0].content.parts[0].text;
      const aiMessageId = nanoid();

      setMessages((prev) => [
        ...prev,
        { id: aiMessageId, text: aiText, sender: "ai" },
      ]);

      const updateMessages = [
        ...messages,
        userMessage,
        { id: aiMessageId, text: aiText, sender: "ai" },
      ];

      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      let currentTitle = chatTitle;

      if (messages.length === 1) {
        try {
          const titleRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                      {
                        text: `لخص السؤال التالي في عنوان قصير جداً وموجز ومحترف (لا يزيد عن 4 كلمات وبدون علامات ترقيم): "${useQuery || selectedFile?.name || "محادثة جديدة"}"`,
                      },
                    ],
                  },
                ],
              }),
            }
          );
          const titleData = await titleRes.json();
          if (
            titleRes.ok &&
            titleData.candidates?.[0]?.content?.parts?.[0]?.text
          ) {
            currentTitle = titleData.candidates[0].content.parts[0].text.trim();
          } else {
            currentTitle =
              useQuery.length > 20
                ? useQuery.substring(0, 20) + "..."
                : useQuery || "New Chat";
          }
        } catch {
          currentTitle =
            useQuery.length > 20
              ? useQuery.substring(0, 20) + "..."
              : useQuery || "New Chat";
        }
        setChatTitle(currentTitle);
      }

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
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: nanoid(),
          text: `Error: ${error.message || "Something went wrong"}`,
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
        overflow: "hidden",
      }}
    >
      {/* الهيدر العلوي */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            color: "text.primary",
            fontSize: "20px",
            marginRight: { sm: "15px", md: "20px" },
          }}
        >
          {chatTitle}
        </Typography>
        <Chip
          label="Gemini 3.6 Flash"
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
          sx={{
            display: { md: "none" },
            color: "text.primary",
            p: 0,
            mx: "10px",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Divider sx={{ marginTop: "20px" }} />

      {/* منطقة عرض الرسائل */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          mt: 2,
          overflowY: "auto",
        }}
      >
        {messages.map((masg) => (
          <Box
            key={masg.id}
            sx={{
              display: "flex",
              justifyContent:
                masg.sender === "user" ? "flex-end" : "flex-start",
              mx: "30px",
              gap: 2,
              marginTop: "30px",
            }}
          >
            {masg.sender === "ai" && (
              <Avatar
                sx={{ bgcolor: "divider" }}
                alt="Gemini"
                src="/broken-image.jpg"
              >
                <TipsAndUpdatesIcon />
              </Avatar>
            )}

            <Typography
              sx={{
                color: "text.primary",
                bgcolor:
                  masg.sender === "user" ? "custom.mutedText" : "divider",
                padding: "20px",
                borderRadius: "15px",
                marginRight: masg.sender === "user" ? "15px" : "0px",
                marginLeft: masg.sender === "ai" ? "15px" : "0px",
                whiteSpace: "pre-line",
              }}
            >
              {masg.text}
            </Typography>

            {masg.sender === "user" && (
              <Avatar
                sx={{ bgcolor: "custom.mutedText" }}
                alt="User"
                src="/broken-image.jpg"
              >
                SA
              </Avatar>
            )}
          </Box>
        ))}

        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginRight: "30px",
              marginTop: "30px",
            }}
          >
            <Avatar
              sx={{ bgcolor: "divider" }}
              alt="Gemini"
              src="/broken-image.jpg"
            >
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
        <div ref={messagesEndRef} />
      </Box>

      <Divider sx={{ marginTop: "20px" }} />

      {/* حقل الإدخال */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          border: "0.4px solid",
          borderColor: "primary.main",
          padding: "4px 8px",
          borderRadius: "15px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChnge}
          style={{ display: "none" }}
          accept="image/*,.txt,.js,.jsx,.ts,.tsx,.json,.css,.html"
        />

        <IconButton onClick={() => fileInputRef.current?.click()}>
          <AttachFileIcon
            sx={{ color: selectedFile ? "primary.main" : "custom.mutedText" }}
          />
        </IconButton>

        <TextField
          id="outlined-basic"
          placeholder={selectedFile ? "" : "Ask Me Anything..."} // استبدال label بـ placeholder عشان الـ Chip يبان صح
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          disabled={loading}
          slotProps={{
            input: {
              startAdornment: selectedFile && (
                <InputAdornment position="start">
                  <Chip
                    label={selectedFile.name}
                    onDelete={() => setSelectedFile(null)}
                    color="primary"
                    size="small"
                    variant="filled"
                    sx={{
                      maxWidth: "140px",
                      "& .MuiChip-label": {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      },
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-input": { color: "text.primary" },
            borderRadius: "15px",
          }}
        />
      </Box>
    </Box>
  );
}