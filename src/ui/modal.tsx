import { FC } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

interface ModalProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Modal: FC<ModalProps> = ({ title, content, onClose, isOpen }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ minWidth: "400px" }}>{content}</DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
