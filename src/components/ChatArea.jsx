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
export default function ChatArea() {
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
          sx={{ color: "text.primary", fontSize: "20px", marginRight: "20px" }}
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
          }}
        />
      </Box>

      <Divider sx={{ marginTop: "20px" }} />

      {/* الجزء الثاني: صندوق الرسايل (ممكن نديله flexGrow عشان يملى المكان) */}
      <Box
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", mt: 2,overflowY:"auto"}}
      >
        {/* رسالة المستخدم (يمين) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "30px",
            marginTop: "30px",
          }}
        >
          <Typography
            sx={{
              color: "text.primary",
              bgcolor: "custom.mutedText",
              padding: "20px",
              borderRadius: "15px",
              marginRight: "15px",
            }}
          >
            Can you explain how electronic circuits work in simple terms?
          </Typography>
          <Avatar
            sx={{ bgcolor: "custom.mutedText" }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            AM
          </Avatar>
        </Box>

        {/* رسالة الـ AI (شمال) */}
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
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            <TipsAndUpdatesIcon sx={{ color: "text.primary" }} />
          </Avatar>
          <Typography
            sx={{
              color: "text.primary",
              bgcolor: "divider",
              padding: "20px",
              borderRadius: "15px",
              marginLeft: "15px",
            }}
          >
            Can you explain how electronic circuits work in simple terms?
          </Typography>
        </Box>
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
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            <TipsAndUpdatesIcon sx={{ color: "text.primary" }} />
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
            <TypingLoader></TypingLoader>
          </Box>
        </Box>
     
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
            sx={{
              flexGrow:1,
              bgcolor: "text.primary",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none", // بيلغيه برضه لما الماوس ييجي عليه
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none", // بيلغيه وأنتِ بتكتبي جواه
              },
              borderRadius: "15px",
            }}
          />
        </Box>
    </Box>
  );
}
