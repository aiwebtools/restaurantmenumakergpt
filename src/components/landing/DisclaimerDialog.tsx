
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface DisclaimerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAgree: () => void;
}

const DisclaimerDialog = ({ open, onOpenChange, onAgree }: DisclaimerDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass border-neon-purple">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gradient">Important Disclaimer</DialogTitle>
          <DialogDescription className="text-gray-300 pt-2">
            Restaurant Menu Maker GPT is provided for informational and creative purposes only. By using this tool, you acknowledge that:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 text-sm text-gray-300">
          <p>• We do not guarantee the accuracy, completeness or reliability of any content generated.</p>
          <p>• You are responsible for reviewing and verifying all menu content before professional use.</p>
          <p>• We are not liable for any business decisions, financial outcomes, or legal issues related to menus created with this tool.</p>
          <p>• We use cookies and similar technologies to enhance your experience and analyze site usage.</p>
        </div>
        <Button 
          onClick={onAgree} 
          className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-opacity w-full mt-2"
        >
          I Understand and Agree
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerDialog;
